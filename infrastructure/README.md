
# Infrastructure

The current continuous delivery deploy the [sample code](../experiment-src) to AWS S3;
hence we need S3 bucket and IAM user.

Creation of those resources is done only at the beginning and we don't use CI tools for this.

We have 2 [CloudFormation templates](./cloudformation-templates) and [Makefile](./Makefile)
to create those resources. Note that a S3 bucket must be created before you create
an IAM user.

When we start using AWS Elastic Beanstalk, these templates/resources can be deleted.
As they're managed by CloudFormation, you can just do `delete-stack`.

## Create resources

You can do for example:

```sh
$ AWS_PROFILE=<YOUR_PROFILE_NAME> make create-artifact-bucket
```

For more information, see [Makefile](./Makefile).
