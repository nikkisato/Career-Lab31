import React from 'react';
import { getQuotesCharacter } from '../services/futuramaApi';

const DropDown = () => (
  <>
    <select>
      <option value='Fry'>Fry</option>
      <option value='Blender'>Blender</option>
      <option value='Leela'>Leela</option>
      <option value='Dr.Zoidberg'>Dr.Zoidberg</option>
      <option value='Amy'>Amy Wong</option>
      <option value='Professor Farnsworth'>Professor Farnsworth</option>
      <option value='aapp-brannigan'>Zapp Brannigan</option>
      <option value='Kif'>Kif Kroker</option>
      <option value='Hermes'>Hermes</option>
      <option value='Lurr'>Lurr</option>
      <option value='Mom'>Mom</option>
      <option value='Linda'>Linda the reporter</option>
      <option value='Scruffy'>Scruffy</option>
      <option value='Bob-barker'> Bob Barker</option>
      <option value='Morgan Proctor'>Morgan Proctor</option>
      <option value='Morbo'>Morbo</option>
      <option value='Michelle'>Michelle</option>
      <option value='Don-bot'>Don Bot</option>
      <option value='Giant-bender'>Giant Bender</option>
      <option value='robot-mob'> Robot Mob</option>
    </select>

    <button
      onClick={() => {
        getQuotesCharacter();
      }}
    >
      GO
    </button>
  </>
);

export default DropDown;
