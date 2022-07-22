npm run build
aws s3 cp build s3://www.arfanfirst.ml --recursive
aws cloudfront create-invalidation --distribution-id=E30RIKEX26YQ4A --paths /