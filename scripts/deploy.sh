echo "Processing deploy.sh"
# Set EB BUCKET as env variable
EB_BUCKET=elasticbeanstalk-us-east-1-605676317945
# Set the default region for aws cli
aws configure set default.region us-east-1
# Log in to ECR
eval $(aws ecr get-login --no-include-email --region us-east-1)
# Build docker image based on our production Dockerfile
docker build -t onyxts/onyx .
# tag the image with the Travis-CI SHA
docker tag onyxts/onyx:latest 605676317945.dkr.ecr.us-east-1.amazonaws.com/onyx:$TRAVIS_COMMIT
# Push built image to ECS
docker push 605676317945.dkr.ecr.us-east-1.amazonaws.com/onyx:$TRAVIS_COMMIT
# Use the linux sed command to replace the text '<VERSION>' in our Dockerrun file with the Travis-CI SHA key
sed -i='' "s/<VERSION>/$TRAVIS_COMMIT/" Dockerrun.aws.json
# Zip up our codebase, along with modified Dockerrun
zip -r onyx-prod-deploy.zip Dockerrun.aws.json
# Upload zip file to s3 bucket
aws s3 cp onyx-prod-deploy.zip s3://$EB_BUCKET/onyx-prod-deploy.zip
# Create a new application version with new Dockerrun
aws elasticbeanstalk create-application-version --application-name Onyx Website --version-label onyx-website --source-bundle S3Bucket=$EB_BUCKET,S3Key=onyx-prod-deploy.zip
# Update environment to use new version number
aws elasticbeanstalk update-environment --environment-name OnyxWebsite-env-1 --version-label onyx-website