# Deployment Process #
The deployment process is currently a manual process;

1. First, built on a local machine using Angular CLI: ```npm run build-prod```.
1. Then the build artifacts from the /dist directory are manually copied to an AWS S3 bucket using the AWS web console.
1. The the EC2 instance is accessed using Putty, with a PEM key that was created using the AWS web console.
1. The artifacts are then transferred from the S3 bucket to the EC2 instance.
    1. First a temp directory is made: ```mkdir temp```
    1. Then the files are transferred into the temp directory: ```aws s3 cp --recursive s3://bucket-name/  temp/```
    1. The files are then moved into the server entry point directory: ```sudo cp -R temp/* /var/www/html/```
    1. Then remove the temp directory: ```rm -rf temp```
        - __Note__: AWS IAM permissions are set manually on the EC2 instance in order for the server to access the S3 bucket (AWS Docs [reference](https://aws.amazon.com/premiumsupport/knowledge-center/ec2-instance-access-s3-bucket/))
        - Setup an IAM User, and under Security Credentials, create an access key and copy credentials to EC2 using ```aws configure``` command
1. Once the transfer is done, a cache clear on a local browser can verify the changes went through with the new deploy.
