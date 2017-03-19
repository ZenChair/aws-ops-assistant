STACK_NAME_BASE = AwsOpsAssistant
ARTIFACT_STACK = ${STACK_NAME_BASE}-artifact-bucket
CI_USER_STACK = ${STACK_NAME_BASE}-ci-user
TPL_DIR = ./cloudformation-templates

create-artifact-bucket:
	aws cloudformation create-stack --stack-name ${ARTIFACT_STACK} --template-body="`cat ${TPL_DIR}/artifact-bucket.yaml`"

update-artifact-bucket:
	aws cloudformation update-stack --stack-name ${ARTIFACT_STACK} --template-body="`cat ${TPL_DIR}/artifact-bucket.yaml`"

create-ci-user:
	aws cloudformation create-stack --stack-name ${CI_USER_STACK} --template-body="`cat ${TPL_DIR}/ci-user.yaml`" \
		--capabilities CAPABILITY_NAMED_IAM \
		--parameters \
			ParameterKey=ArtifactBucketStackName,ParameterValue=${ARTIFACT_STACK},UsePreviousValue=false

update-ci-user:
	aws cloudformation update-stack --stack-name ${CI_USER_STACK} --template-body="`cat ${TPL_DIR}/ci-user.yaml`" \
		--capabilities CAPABILITY_NAMED_IAM \
		--parameters \
			ParameterKey=ArtifactBucketStackName,ParameterValue=${ARTIFACT_STACK},UsePreviousValue=false
