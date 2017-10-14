<template>
  <div class="thehome-row" v-once>
    <Row type="flex" justify="center">
      <Col span="18">
        <Card class="thehome">
          <h2 slot="title">What is the electrical signals in plant?</h2>
          <P>Electrical signals have been shown to be involved in many processes in plant life, 
            including respiration, water uptake, leaf movement and biotic stress response. 
            Electrical signals may not be induced by exterior stimulus in lower plants, 
            but they play an important role in non-sensitive higher plants.
          </P>
          <img src="../assets/plant/plant1.jpg">
          <p>You can find an example of measuring electrical signals from a plant in this gragh. 
            In the table below, there exsists three kinds of electrical signals in plants.</p>
          <Table :columns="columns1" :data="elecSignals"></Table>
        </Card>
      </Col>
    </Row>
    <Row type="flex" justify="center">
      <Col span="18">
        <Card>
          <h2 slot="title">How to measuring the signals?</h2>
          <h4>1. EXTRACELLULAR MEASUREMENT</h4>
          <p>Extracellular measurement can detect the electrical signals produced by multicells, 
            and is applicable to the monitoring of an individual plant (Fig. 1). 
            As electrical signals in plants are weak signals, they usually must be amplified and the 
            recording device must have a high input impedance.
          </p>
          <img src="../assets/plant/extracellular.png">
          <img src="../assets/plant/extra1.png">
          <h4>2.INTRACELLULAR MEASUREMENTS</h4>
          <p>Intracellular measurement is applicable to the observation and study of bioelectricity at the cell level, 
            and normally uses a glass microelectrode with a tip diameter lower than 1 micrometer inserted into the periphery of the living cell or the cell body to observe the electrical activity of several cells or even a single cell. 
            The intracellular measurement is performed with one electrode placed inside a cell while the reference electrode is situated in the bath solution surrounding the cell.
          </p>
          <img src="../assets/plant/Fig.7.png">
          <h4>3.PATCH CLAMP RECORDING TECHNIQUE</h4>
          <p>
            The patch clamp recording technique was developed by Neher and Sakmann in 1976. 
            From a whole cell to isolated membrane patches, the current of a single or multi-ion channel can be recorded. 
            Due to the use of the patch-clamp technique, the knowledge of ion channels in plants has been growing rapidly over the last twenty years. 
            Studies of different plant species and various cell types have revealed that all subcellular membranes investigated thus far 
            (plasma membrane, tonoplast, plastidial and mitochondrial membranes) are equipped with a variety of channels exhibiting different ion selectivities and specific regulation mechanisms.
          </p>
          <img src="../assets/plant/patchclamp2.png">
          <h4>4.NON-INVASIVE MICROELECTRODE VIBRATING PROBE TECHNIQUE</h4>
          <p>
            The non-invasive microelectrode vibrating probe technique was developed by KÃ¼htreiber and Jaffe based on a computer controlled measuring system with automatic positioning function designed in 1990, 
            and is the most advanced selective ion/molecule measuring technique used to link genetic/genomic data to cellular physiological behavior. 
            Some of its key features (e.g. non-invasiveness, high spatial and temporal resolution) allow us to establish and quantify causal links between membrane-transport 
            processes and metabolic or other physiological processes in the cell under almost natural conditions. 
            In this context, this technique may be considered as a connection between molecular biologists and whole plant physiologists or agronomists.
          </p>
          <img src="../assets/plant/SIET.png">
          <h4>5.MULTI-ELECTRODE ARRAY (MEA) RECORDING</h4>
          <p>
            Multi-electrode arrays (MEAs) can overcome these limitations and enable the monitoring 
            of bioelectrical activities at multiple sites with high spatio-temporal resolution1. 
            MEAs have been used in vitro for more than 40 years to measure the electrical activities 
            of heart cells from cultured embryonic chicks15. A MEA device consists of an array of 
            microelectrodes (typically 10â50 mm in diameter) that are connected to an external 
            circuitry that enables the recording of electrical activities from excitable cells 
            (usually neurons or cardiomyocytes) and tissues. In recent years, significant progress 
            has been made in this technique, and highly reliable MEAs have been used in the extracellular 
            and intracellular recording of animal cells and maize root apices.
          </p>
          <img src="../assets/plant/MEA1.png">
          <h4>6.OPTICAL RECORDING</h4>
          <p>
            The limitations of conventional extracellular recording and intracellular recording 
            make highresolution multisite recording of plant bioelectrical activity in situ challenging. 
            By combining a cooled charge-coupled device camera with a voltage-sensitive dye, 
            we recorded the action potentials in the stem of Helianthus annuus and variation 
            potentials at multiple sites simultaneously with high spatial resolution. 
            The method of signal processing using coherence analysis was used to determine 
            the synchronization of the selected signals. Our results provide direct visualization 
            of the phloem, which is the distribution region of the electrical activities in the stem 
            and leaf of H. annuus, and verify that the phloem is the main action potential transmission 
            route in the stems of higher plants. Finally, the method of optical recording offrs a 
            unique opportunity to map the dynamic bioelectrical activity and provides an insight into 
            the mechanisms of long-distance electrical signal transmission in higher plants.
          </p>
          <img src="../assets/plant/opti2.png">
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: 'Signals',
          key: 'signal'
        },
        {
          title: 'Define',
          key: 'define'
        },
        {
          title: 'Characters',
          key: 'character'
        }
      ],
      elecSignals: [
        {
          signal: 'LEP',
          define: 'Local electrical potentialis a sub-threshold response induced by change in environmental factors (e.g. soil, water, fertility, light, air temperature, and humidity).',
          character: 'LEP is only locally generated and is not transferred to other parts of a plant'
        },
        {
          signal: 'AP',
          define: 'Action potential is induced by non-damaging stimuli(e.g. cold, mechanical and electrical stimuli)',
          character: 'AP is a widespread signaling phenomenon which can rapidly transmit information over long distances.'
        },
        {
          signal: 'VP',
          define: 'Variation potential is induced by damaging stimuli(e.g. burning and cutting).',
          character: 'VP is characterized by a decrease in magnitude as it spreads away from the stimulated site'
        }

      ]
    }
  }
}
</script>

<style scoped>
.thehome-row{
  padding: 12px;
}
p {
  margin: 12px;
}

h4 {
  margin: 12px;
}
h2 {
  margin: 12px;
}
img {
  display: block;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 650px;
}
</style>

