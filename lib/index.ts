import { App, YamlOutputType } from 'cdk8s'
//.env 파라미터 관련 import
import * as dotenv from 'dotenv'
import * as charts from './charts'

const NS = {
  sample: 'SAMPLE',
}

//.env 파일 활용
dotenv.config()

const app = new App({
  // FILE_PER_CHART
  // FILE_PER_APP
  // FILE_PER_RESOURCE
  // FOLDER_PER_CHART_FILE_PER_RESOURCE
  yamlOutputType: YamlOutputType.FILE_PER_CHART,
})

//test
new charts.SampleChart(app, 'mosan-thermo', { namespace: NS.sample })

app.synth()
