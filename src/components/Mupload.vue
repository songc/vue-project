<template>
  <div>
    <Upload :before-upload="handleUpload" :action="url" name="files" multiple>
      <Button type="ghost" icon="ios-cloud-upload-outline">Upload Files</Button>
    </Upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      handleUpload: false
    }
  },
  computed: {
    url() {
      // let id = this.$store.selected.id
      return '/folder/' + 3 + '/mulfile'
    }
  }
}
</script>

