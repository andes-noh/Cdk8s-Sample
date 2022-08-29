import { Construct } from 'constructs'
import { Chart, ChartProps } from 'cdk8s'
import { IntOrString, KubeDeployment, KubeService, Quantity } from '../../imports/k8s'
import { Memoize } from 'typescript-memoize'

export class NestServerChart extends Chart {
  constructor(scope: Construct, private readonly id: string, props: ChartProps = {}) {
    super(scope, id, {
      ...props,
      labels: {
        'app.kubernetes.io/name': id,
        'app.kubernetes.io/component': 'back',
        'app.kubernetes.io/part-of': 'httpServer',
      },
    })

    // this.secret
    this.deployment
    this.service
    // this.ingress
  }

  @Memoize()
  get deployment(): KubeDeployment {
    return new KubeDeployment(this, 'deployment', {
      metadata: {
        name: this.id,
      },
      spec: {
        selector: {
          matchLabels: this.labels,
        },
        template: {
          metadata: {
            labels: this.labels,
          },
          spec: {
            // imagePullSecrets: [{ name: 'YourSecret' }],
            containers: [
              {
                name: 'app',
                image: 'ghcr.io/andes-noh/nest-http-app:9e830286',
                ports: [{ containerPort: 3000 }],
                // envFrom: [{ secretRef: { name: this.secret.name } }],
                // resource setting
                resources: {
                  limits: {
                    cpu: Quantity.fromString('0.2'),
                    memory: Quantity.fromString('128M'),
                  },
                },
              },
            ],
          },
        },
      },
    })
  }

  @Memoize()
  get service(): KubeService {
    return new KubeService(this, 'service', {
      metadata: {
        name: this.id,
      },
      spec: {
        selector: this.labels,
        type: 'NodePort',
        ports: [{ port: 3000, targetPort: IntOrString.fromNumber(3000), nodePort: 32755 }],
      },
    })
  }

  // @Memoize()
  // get secret(): KubeSecret {
  //   const env = {
  //     DB_HOST: process.env.DB_HOST,
  //     DB_PORT: process.env.DB_PORT,
  //     DB_USERNAME: process.env.DB_USERNAME,
  //     DB_PASSWORD: process.env.DB_PASSWORD,
  //     DB_DATABASE: process.env.DB_DATABASE,
  //   }

  //   assert(env.DB_HOST, 'HOST ERROR')
  //   assert(env.DB_PORT, 'PORT ERROR')
  //   assert(env.DB_USERNAME, 'USER NAME ERROR')
  //   assert(env.DB_PASSWORD, 'PASSWORD ERROR')
  //   assert(env.DB_DATABASE, 'DATABASE ERROR')

  //   return new KubeSecret(this, 'secret', {
  //     metadata: {
  //       name: this.id,
  //     },
  //     stringData: {
  //       DB_HOST: env.DB_HOST,
  //       DB_PORT: env.DB_PORT,
  //       DB_USERNAME: env.DB_USERNAME,
  //       DB_PASSWORD: env.DB_PASSWORD,
  //       DB_DATABASE: env.DB_DATABASE,
  //     },
  //   })
  // }

  // @Memoize()
  // get ingress(): KubeIngress {
  //   return new KubeIngress(this, 'ingress', {
  //     metadata: {
  //       labels: this.labels,
  //       annotations: {
  //         'acme.cert-manager.io/http01-edit-in-place': 'true',
  //         'cert-manager.io/cluster-issuer': 'letsencrypt',
  //         'cert-manager.io/issue-temporary-certificate': 'true',
  //         'ingress.kubernetes.io/rewrite-target': '/',
  //         'traefik.ingress.kubernetes.io/rewrite-target': '/',
  //         'kubernetes.io/ingress.class': 'traefik',
  //         'kubernetes.io/tls-acme': 'true',
  //       },
  //     },
  //     spec: {
  //       tls: [
  //         {
  //           hosts: ['Your Domain'],
  //           secretName: 'Your TLS',
  //         },
  //       ],
  //       rules: [
  //         {
  //           host: 'Your Domain',
  //           http: {
  //             paths: [
  //               {
  //                 path: '/',
  //                 pathType: 'Prefix',
  //                 backend: {
  //                   service: {
  //                     name: this.service.name,
  //                     port: { number: 9000 },
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   })
  // }
}
