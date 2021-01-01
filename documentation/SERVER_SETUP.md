# AWS Environment Setup #
Application will run on an AWS EC2 instance at an HTTPS URL.
1. Make sure that a Key Pair has been created for the EC2 instance that will be set up - [Create a Key Pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/get-set-up-for-amazon-ec2.html#create-a-key-pair).
1. Mark a seurity group and put key in group - [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/get-set-up-for-amazon-ec2.html#create-a-base-security-group)
1. Create the EC2 instance - [Step 1: Launch an Instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html#ec2-launch-instance)
1. Connect to the EC2 instance with PuTTY - [Connect to you Linux instance from Windows using PuTTY](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html)
1. Install ```httpd``` on server (reference installing LAMP on server, but only need to setup ```httpd```) - [Tutorial: Install a LAMP web server on Amazon Linux 2
](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-lamp-amazon-linux-2.html)
    ```
    sudo yum install -y httpd
    sudo systemctl start httpd
    sudo systemctl enable httpd
    sudo systemctl is-enabled httpd
    ```
1. Install SSL support on the server - [Configure SSL/TLS on Amazon Linux 2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html)
1. Associate your server with an Elastic IP - [Elastic IP Addresses](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)
    - if you set up PuTTY before this step, you will have to reenter the IP address
1. Set up R3 Hosted Zone records for the domain
    - set redirect for www in order to redirect from www Alias to host page (StackOverflow [reference](https://stackoverflow.com/questions/50985397/how-to-add-www-to-domain-in-aws-route53))
1. Install Automatic Certificate Generation on Server - [Certificate Automation: Certbot](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html#letsencrypt)
    - server should update the ```/etc/crontab``` to auto update cert since Certbot certifications expirer after 90 days
    - cron job script: ```22 1 1 * * root cerbot renew --no-self-upgrade```
    - reset cron after upgrading script: ```sudo systemctl restart crond```

## Deployment Setup ##
Can set up Transfer files from local machine to server using PuTTY - [Transferring files to your Linux instance using the PuTTY Secure Copy client](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html#putty-scp), or setup S3 bucket to transfer local files to and then set up security group to pull files from S3 to EC2 instance while connected in putty.