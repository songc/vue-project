<template>
  <div class="theteacher" v-once>
    <Row type="flex" justify="center">
      <Col span="18">
        <Card>
          <p slot="title">Zhong-yi Wang, Ph.D.</p>
          <Row :gutter="16">
            <Col span="6">
              <img src="../assets/techer_w.png">
            </Col>
            <Col span="18">
              <p>Professor</p>
              <p>Department of Electronic Engineering</p>
              <p>College of Information and Electrical Engineering</p>
              <p>China Agricultural University</p>
              <p>Tel:+86-010-62737778  Fax: +86-010-62737778</p>
              <p>Email: wzyhl@cau.edu.cn</p>
            </Col>
          </Row>
          <h4>Research Interests</h4>
          <p>Optoelectronic Technology and Non-invasive Detection: 
            This direction is development and application of novel optical 
            methods and instruments for determining quality of the farm product. 
            All researches were supported by National High Technology Research and 
            Development Program of China (Grant No.2007AA10Z212), 
            Natural Science Foundation of Beijing (Grant No. 4092025)
          </p>
          <p>
            Signal processing. My research is concerned with signal processing 
            methods for plant electrical signal. All researches were supported 
            by National Natural Science Foundation of China (Grant No. 60571027) 
            and National High Technology Research and Development Program of China (Grant No.2008AA10Z201).
          </p>
          <p>
            Biophysics: My Interests in this toptic include physiological sensor 
            and monitoring systems for crop, optical image of cells. All researches 
            were supported by National High Technology Research and Development 
            Program of China (Grant No.2008AA10Z201).
          </p>
        </Card>
      </Col>
    </Row>
    <Row type="flex" justify="center">
      <Col span="18">
        <Card>
          <p slot="title">Lan Huang, Ph.D.</p>
          <Row :gutter="16">
            <Col span="6">
              <img src="../assets/techer_h.png">
            </Col>
            <Col span="18">
              <p>Professor</p>
              <p>Department of Electronic Engineering</p>
              <p>College of Information and Electrical Engineering</p>
              <p>China Agricultural University</p>
              <p>Tel:+86-010-62737778  Fax: +86-010-62737778</p>
              <p>Email: hlan@cau.edu.cn</p>
            </Col>
          </Row>
          <h4>Research Interests</h4>
          <p>Embedded system and applications: The main focus is 
            on the development of reliable real time embedded system. 
            Also, my research interest includes wireless sensor networks and applications.
          </p>
          <p>
            Signal processing: We have pioneered the use of signal processing methods 
            for plant electrical signal and have for the first time investigated 
            the use of a monitoring system to measure plant electrical signal non-invasively 
            in greenhouse. All researches were supported by National Natural Science Foundation 
            of China (Grant No. 60571027) and National High Technology Research and Development 
            Program of China (Grant No.2008AA10Z201).
          </p>
          <p>
            Non-invasive Detection and instruments: One direction is development and application 
            of novel optical methods and instruments for determining the quality of fresh meat. 
            Another direction in this research area is biomedical photonics and applications. 
            All researches were supported by National High Technology Research and Development Program 
            of China (Grant No.2007AA10Z212), Natural Science Foundation of Beijing (Grant No. 4092025) 
            and National Natural Science Foundation of China (Grant No. 60578004).
          </p>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.theteacher {
  padding: 12px;
}
p, h4{
  margin: 12px;
}
img {
  display: block;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
</style>
