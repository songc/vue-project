<template>
  <Menu mode="horizontal" theme="light" :active-name="menuItemName" @on-select="getDatasets">
    <Row type="flex" justify="space-between" align="middle">
      <Col span="2">
      <img src="../assets/logo1.png" class="menu-logo"/>
      </Col>
      <Col span="12">
      <MenuItem name="private" v-show="isLogin"> You Dataset
      </MenuItem>
      <MenuItem name="public"> Public Dataset
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
      <Button type="ghost" size="small" icon="plus-circled" @click="createDataset">New Dataset</Button>
      <Dropdown trigger="hover" placement="bottom" @on-click="resolveClick">
        <Avatar icon="person" class="menu-avatar">
        </Avatar>
        <Icon type="arrow-down-b"></Icon>
        <DropdownMenu slot="list">
          <DropdownItem name="profile">Your profile</DropdownItem>
          <DropdownItem name="setting" divided>Setting</DropdownItem>
          <DropdownItem name="logout" divided>Sign out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </Col>
    </Row>
  </Menu>
</template>

<script>
import Login from './Login'
import Register from './Register'
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
  beforeCreate: function() {
    if (!this.$store.state.isLogin) {
      this.$store.dispatch('getPublicDatasets', 10, 10)
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    },
    userId() {
      this.$store.state.user.id
    },
    menuItemName() {
      if (this.$store.state.isLogin) {
        return 'private'
      } else {
        return 'public'
      }
    }
  },
  methods: {
    createDataset() {
      if (this.isLogin) {
        this.$router.push(`/user/${this.userId}/dataset/post`)
      }
    },
    getDatasets(a) {
      if (a === 'private') {
        this.$store.dispatch('getDatasets', this.$store.state.user.id)
      } else if (a === 'public') {
        this.$store.dispatch('getPublicDatasets', 10, 10)
      }
    },
    resolveClick(name) {
      if (name === 'logout') {
        this.$store.commit('logout')
        this.$router.push({name: 'home'})
      }
      if (name === 'setting') {
        this.$router.push(`/user/${this.userId}/setting`)
      }
      if (name === 'profile') {
        this.$router.push('/user/profile')
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
