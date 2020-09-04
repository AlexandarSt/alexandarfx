const BASS_PEDAL_DATA = {
    overdrive: {
      id: 100,
      title: 'overdrive',
      routeName: 'overdrive',
      items: [
        {
          id: 100,
          name: 'BBB Preamp',
          imageUrl: '/images/bass/bbbpreamp/bbbpreamp1.jpg',
          price: 131,
          category: 'overdrive',
          video: '',
          description: '<p>This is the bass version of a great overdrive pedal. The main features of this pedal are: </p><ul><li>Mid / High gain level</li><li>Clipping with the help of silicon diodes</li><li>Active Baxandal tone control (Bass, Treble)</li></ul><p>Except for the bass, this pedal is very suitable for the guitar if you want to get a stoner rock sound (Queens of the Stone Age, Kyuss, etc.), a new metal with reduced guitar strings and the likes.</p><p>This pedal comes with one-year warranty.</p>',
          images: [
            '/images/bass/bbbpreamp/bbbpreamp1.jpg',
            '/images/bass/bbbpreamp/bbbpreamp2.jpg',
            '/images/bass/bbbpreamp/bbbpreamp3.jpg',
            '/images/bass/bbbpreamp/bbbpreamp4.jpg',
            '/images/bass/bbbpreamp/bbbpreamp5.jpg',
          ]
        },
        {
          id: 101,
          name: 'Fat Fuzzy Factory',
          imageUrl: '/images/bass/fatfuzzyfactory/fatfuzzyfactory1.jpg',
          price: 131,
          category: 'overdrive',
          video: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/9PKQ4_E3mPs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          description: '<p>This is a bass FAT version of the most versatile fuzz effect with which you can get almost all kinds of guitar sounds that older models produced as well as advanced sounds not produced by any other fuzz. The version We make is hybrid, unlike the original, in order to gain more gain and self-esteem.</p>',
          images: [
            '/images/bass/fatfuzzyfactory/fatfuzzyfactory1.jpg',
            '/images/bass/fatfuzzyfactory/fatfuzzyfactory2.jpg',
            '/images/bass/fatfuzzyfactory/fatfuzzyfactory3.jpg',
            '/images/bass/fatfuzzyfactory/fatfuzzyfactory4.jpg',
          ]
        }
      ]
    },
    loopers: {
      id: 101,
      title: 'loopers',
      routeName: 'loopers',
      items: [
        {
          id: 102,
          name: 'Loop Mixer',
          imageUrl: '/images/bass/loopmixer/loopmixer1.jpg',
          price: 131,
          category: 'loopers',
          video: '',
          description: '<p>Loop Mixer is a device with which you can actively mix the pure guitar and bass guitar with the signal obtained by passing the base signal through a loop in which any effect can be connected. This is suitable for bass guitarists who have effects that are primarily designed for guitarists and cut off a lower range of frequencies, the so-called low end.</p><p>With this device you can use any guitar effect on bass guitars and if you lose the lower frequencies, restore them by actively mixing dry and wet signals. The active gain level is + 16db.</p><p>The advantage of using two active mixing controls in relation to blend control lies in the ability to better maintain the level of the wet signal, which is necessary in situations where the drive or fuzz pedal emits a stronger signal that causes additional clips in the preamp section of the amplifier.</p>',
          images: [
            '/images/bass/loopmixer/loopmixer1.jpg',
            '/images/bass/loopmixer/loopmixer2.jpg',
            '/images/bass/loopmixer/loopmixer3.jpg',
            '/images/bass/loopmixer/loopmixer4.jpg',
          ]
        }
      ]
    }
} 

export default BASS_PEDAL_DATA