import { linkTo } from '@storybook/addon-links'
import { withKnobs, text } from '@storybook/addon-knobs/vue'
import Centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/vue'

import MyButton from './../components/MyButton.vue'

// storiesOf('MyButton', module)
//   .add('story as a component', () => ({
//     components: { MyButton },
//     template: '<MyButton>This is button!</MyButton>'
//   }));

storiesOf('MyButton', module)
  .addDecorator(Centered)
  .addDecorator(withKnobs)
  .add('with some Addons', () => {
    const label = text('Label', 'BUTTON')
    const name = text('Name', 'Arunoda Susiripala')
    return {
      components: { MyButton },
      template: `
        <div>
          <p>You can change the button label by touching widgets in a KNOBS tab. ${name}</p>
          <MyButton
            @click="handleClick"
           >${label}</MyButton>
        </div>
      `,
      methods: {
        handleClick: linkTo('SomeComponent')
      },
    }
  })

storiesOf('SomeComponent', module)
  .add('hoge', () => ({
    template: `<div>HOGE</di>`
  }))
