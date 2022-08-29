import { App, YamlOutputType } from 'cdk8s'
//.env 파라미터 관련 import
import * as dotenv from 'dotenv'
import * as charts from './charts'

const NS = {
  sample: 'SAMPLE',
  test: 'test',
  nestServer: 'nest-http',
}

//.env 파일 활용
dotenv.config()

const app = new App({
  // FILE_PER_CHART
  // FILE_PER_APP
  // FILE_PER_RESOURCE
  // FOLDER_PER_CHART_FILE_PER_RESOURCE
  yamlOutputType: YamlOutputType.FILE_PER_RESOURCE,
})

//test
new charts.TestChart(app, 'test', { namespace: NS.test })
// new charts.NestServerChart(app, 'nest-http', { namespace: NS.nestServer })

app.synth()
