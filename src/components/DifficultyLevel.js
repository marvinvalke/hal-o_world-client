import React from 'react';
import Select from 'react-select';

function DifficultyLevel() {


    const options = [
        { value: 'easypeasy', label: 'Easy-Peasy' },
        { value: 'outofthisworld', label: 'Out of this world madness' },
        { value: 'childsplay', label: 'Childplay' },
        { value: 'mediumrare', label: 'Medium-Rare beef' },
        { value: 'impossibro', label: 'Stratospheric-Impossibro' },
        { value: 'ultranerd', label: 'Ultra-Nerd level' }
      ]


    return (
        <div>
            <Select className="selectInput" name="difficulty" placeholder="Select mission's difficulty" options={options} />
        </div>
    )
}

export default DifficultyLevel
