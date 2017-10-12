<template>
  <Menu mode="horizontal" theme="light" @on-select="go">
    <Row type="flex" justify="space-between" align="middle" :gutter="16">
      <Col span="10">
        <Row :gutter="16">
          <Col span="6">
            <img class="menu-logo" src="../assets/logo1.png" @click="goHome"> 
          </Col>
          <Col span="18" class-name="navmenu">
            <MenuItem name="dashBoard" v-show="isLogin">DashBoard
            </MenuItem>
            <MenuItem name="dataset">Dataset</MenuItem>
            <MenuItem name="project">Project</MenuItem>
            <MenuItem name="paper">Paper</MenuItem>
            <Submenu name="about">
              <template slot="title">
                People
              </template>
              <MenuItem name="teacher">Teacher</MenuItem>
              <MenuGroup title="Student">
                <MenuItem name="phd">Ph.D.</MenuItem>             
                <MenuItem name="master">Master</MenuItem>                          
              </MenuGroup>           
            </Submenu>
          </Col>
        </Row>
      </Col>
      <Col span="12">
        <Row type="flex" justify="end" :gutter="16">
        <Col span="8">
        <Input v-model="seachValue" placeholder="search dataset ... ">
        </Input>
        </Col>
        <Col span="8">
          <div v-if="isLogin">
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
          </div>
          <div v-else>
            <Button @click="login">Login in</Button>
            <Button @click="register">Sign Up</Button>
          </div>
        </Col>
        </Row>
      </Col>
    </Row>
  </Menu>
</template>

<script>
export default {
  data() {
    return {
      seachValue: ''
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    },
    userId() {
      return this.$store.state.user.id
    }
  },
  methods: {
    login() {
      this.$emit('on-login')
      this.login = false
    },
    register() {
      this.$emit('on-register')
      this.register = false
    },
    goHome() {
      this.$router.push('/home')
    },
    go(name) {
      this.$router.push(`/${name}`)
    },
    createDataset() {
      if (this.isLogin) {
        this.$router.push('/dashBoard')
      } else {
        this.$emit('on-login')
      }
    },
    resolveClick(name) {
      if (name === 'logout') {
        this.$store.commit('logout')
        this.$router.push({name: 'home'})
      }
      if (name === 'setting') {
        this.$router.push(`/user/setting`)
      }
      if (name === 'profile') {
        this.$router.push('/user/profile')
      }
    }
  }
}
</script>

<style scoped>
.navmenu {
  text-align: left;
}
.menu-logo {
  display: inline;
  vertical-align: middle;
}
.menu-avatar{
  vertical-align: middle;
}
</style>
