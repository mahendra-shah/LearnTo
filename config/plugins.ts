export default ({ env }) => ({
  editorjs: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-react-editorjs",
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  //   upload: {
  //     config: {
  //       provider: "aws-s3",
  //       providerOptions: {
  //         accessKeyId: env("AWS_ACCESS_KEY_ID"),
  //         secretAccessKey: env("AWS_ACCESS_SECRET"),
  //         region: env("AWS_REGION"),
  //         params: {
  //           Bucket: env("AWS_BUCKET_NAME"),
  //         },
  //       },
  //       actionOptions: {
  //         upload: {},
  //         uploadStream: {},
  //         delete: {},
  //       },
  //     },
  //   },
});
