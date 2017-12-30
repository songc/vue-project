<script>
import DatasetMetaShow from './DatasetMetaShow'
import EquipmentShow from './EquipmentShow'
import IecMetaShow from './IecMetaShow'
import ImageMetaShow from './ImageMetaShow'
import SampleShow from './SampleShow'
import SoftwareShow from './SoftwareShow'
import {firstLowerCase} from '../util/StringUtil'
import EnvironmentShow from './EnvironmentShow'
export default {
  name: 'InfoShow',
  components: {
    DatasetMetaShow,
    EquipmentShow,
    IecMetaShow,
    ImageMetaShow,
    SampleShow,
    SoftwareShow,
    EnvironmentShow
  },
  props: {
    info: Object,
    title: String,
    type: String
  },
  render: function(createElement) {
    let propTitle = firstLowerCase(this.type)
    return createElement('Card', [
      createElement('p', {
        slot: 'title'
      }, this.title),
      createElement(this.type + 'Show', {
        props: {
          [propTitle]: this.info
        }
      })])
  }
}
</script>
