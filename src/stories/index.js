import { storiesOf } from '@storybook/vue'

import MyButton from './../components/MyButton.vue'

storiesOf('MyButton', module)
  .add('story as a component', () => ({
    components: { MyButton },
    template: '<MyButton>This is button!</MyButton>'
  }));
