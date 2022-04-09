import React from 'react';
import Select from 'react-select';
import { Days } from '../models/Days';

const options = Days;

const MyComponent = () => <Select options={options} />;

export default MyComponent;
