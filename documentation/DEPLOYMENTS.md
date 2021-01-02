# Deployment Process #
The deployment process is currently a manual process;

1. First, built on a local machine using Angular CLI: ```npm install --verbose && npm run build```.
1. Then the build artifacts from the /dist directory are manually copied to an AWS S3 bucket using the AWS web console.
1. The the EC2 instance is accessed using Putty, with a PEM key that was created using the AWS web console.
1. The artifacts are then transferred from the S3 bucket to the EC2 instance.
    1. First a temp directory is made: ```mkdir temp```
    1. Then the files are transferred into the temp directory: ```aws s3 cp --recursive s3://bucket-name/  temp/```
    1. The files are then moved into the server entry point directory: ```sudo cp -R temp/* /var/www/html/<app-name>```
    1. Then remove the temp directory: ```rm -rf temp```
        - __Note__: AWS IAM permissions are set manually on the EC2 instance in order for the server to access the S3 bucket (AWS Docs [reference](https://aws.amazon.com/premiumsupport/knowledge-center/ec2-instance-access-s3-bucket/))
        - Setup an IAM User, and under Security Credentials, create an access key and copy credentials to EC2 using ```aws configure``` command
1. Once the transfer is done, a cache clear on a local browser can verify the changes went through with the new deploy.

## Local Build Script ##
Script to run on your local machine to build all projects (run from root of entire project).
```
git clone <repo-url>
cd <repo-name>
mkdir dist
cd applications

cd analytic-form
npm install --verbose
npm run build
mv dist/* ../../dist
cd ..

cd cascading-windows
npm install --verbose
npm run build
mv dist/* ../../dist
cd ..

cd date-picker-test
npm install --verbose
npm run build
mv dist/* ../../dist
cd ..

cd markdown-previewer
npm install --verbose
npm run build
mv dist/* ../../dist
cd ..

cd micro-landing
npm install --verbose
npm run build
mv dist/micro-landing/* ../../dist
cd ..

cd minimized-windows
npm install --verbose
npm run build
mv dist/* ../../dist
cd ..

cd modal-windows
npm install --verbose
npm run build
mv dist/* ../../dist
cd ..

cd ..
ls dist
```
