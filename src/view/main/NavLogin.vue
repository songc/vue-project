<template>
  <Menu mode="horizontal" theme="light" active-name="1" @on-select="getDatasets">
    <Row type="flex" justify="space-between" align="middle">
      <Col span="2">
      <img src="../../assets/logo1.png" class="menu-logo"/>
      </Col>
      <Col span="12">
      <MenuItem name="1"> You Dataset
      </MenuItem>
      <MenuItem name="2"> Public Dataset
      </MenuItem>
      </Col>
      <Col span="3">
      <div>
      <Input v-model="seachValue" class="menu-search">
      <Button slot="append" icon="ios-search"></Button>
      </Input>
      </div>
      </Col>
      <Col span="3">
      <Button type="ghost" size="small" icon="plus-circled">New Dataset</Button>
      <Dropdown trigger="hover" placement="bottom">
        <Avatar icon="person" class="menu-avatar">
        </Avatar>
        <Icon type="arrow-down-b"></Icon>
        <DropdownMenu slot="list">
          <DropdownItem>Your profile</DropdownItem>
          <DropdownItem divided>Setting</DropdownItem>
          <DropdownItem divided>Sign out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </Col>
    </Row>
  </Menu>
</template>

<script>
import Login from '../../components/Login'
import Register from '../../components/Register'
export default {
  components: {
    Login,
    Register
  },
  data() {
    return {
      seachValue: '',
      select: 'self',
      login: false,
      register: false
    }
  },
  methods: {
    getDatasets(a) {
      if (a === '1') {
        this.$store.dispatch('getDatasets', this.$store.state.user.id)
      } else if (a === '2') {
        this.$store.dispatch('getPublicDatasets', 10, 10)
      }
    }
  }
}
</script>

<style scoped>
.menu-logo {
  display: inline;
  vertical-align: middle;
}
.menu-search {
  vertical-align: middle;
}
.menu-avatar{
  vertical-align: middle;
}
.menu-tooltip{
  background: #fff;
}
</style>
