# Configuration

Create the configuration in `secrets.json`

```
{
  "NODE_ENV": "production",
  "DOMAIN": ""
}
```

You should provision certificate via AWS Certificate Manager (ACM) in region `us-east-1`. This is the only region that supported by API Gateway. 

# Deploy the app to AWS Lambda

Initialize domain in API Gateway as specified in the configuration

```
$ serverless create_domain
```

This will create a CloudFront distribution and hook it up to your domain. Make sure that you've added the certificates to your AWS account. It usually takes around 20 minutes for AWS to provision a new distribution. Rest your eyes for a moment.

Once you're back, go ahead and deploy it all again.
```
$ npm run deploy
```

# Remove deployment

Remove domain from API Gateway

```
$ serverless delete_domain
```

Remove all assets
```
$ serverless remove
```

## References

https://dev.to/adnanrahic/a-crash-course-on-serverless-side-rendering-with-reactjs-nextjs-and-aws-lambda-13ed