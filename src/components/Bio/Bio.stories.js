import React from 'react';

import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio
};

const Template = () => (
  <Bio
     headshot="https://i.imgur.com/j3Fs3w9.jpg"
     name="Miguel Angel Carrizo"
     role="Desarrollador React | Next JS"
     tagline="Anotaciones"

/>
);

export const Default = Template.bind({});