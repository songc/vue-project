<template>
<div>
  <ButtonGroup size="small">
  <Button type="success">New Folder</Button>
  <Button type="warning">Rename</Button>
  <Button type="error">Delete</Button>
  </ButtonGroup>
  <Tree :data="treeData"></Tree>
</div>
</template>

<script>
export default {
  data() {
    return {
      treeData: {
        title: '',
        children: []
      }
    }
  }
}
</script>
