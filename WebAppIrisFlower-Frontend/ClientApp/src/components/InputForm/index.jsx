import React from 'react'

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    FormWrap,
    Form,
    Label,
    Input,
} from './InputElements'

import { CustomButton } from '../ButtonElement';

// import { make_request } from '../../Communication/requester'

const axios = require('axios').default;
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

const handleSubmit = async (event) => {
    const s_length_input = document.getElementById('sepal-length');
    const s_width_input = document.getElementById('sepal-width');
    const p_length_input = document.getElementById('petal-length');
    const p_width_input = document.getElementById('petal-width');

    const s_length = s_length_input.value
    const s_width = s_width_input.value
    const p_length = p_length_input.value
    const p_width = p_width_input.value

    event.preventDefault();
    axios({
        method: 'post',
        url: 'https://localhost:44345/predict',
        data: {
            sepal_length: s_length == "" ? 0 : s_length,
            sepal_width: s_width == "" ? 0 : s_width,
            petal_length: p_length == "" ? 0 : p_length,
            petal_width: p_width == "" ? 0 : p_width
        }
      }).then(function (response) {
            console.log(response);

            var species = response.data.prediction;

            alert(species)
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        }) 
    
        s_length_input.value = "";
        s_width_input.value = "";
        p_length_input.value = "";
        p_width_input.value = "";
}

function InputForm({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightTextDesc, 
    headline, 
    darkText, 
    description, 
    primary,
    dark,
    dark2,
    buttonLabel}) {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightTextDesc}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                    <CustomButton type='Submit'
                                    form='compute-form' 
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1: 0}>{buttonLabel}</CustomButton>
                                </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <FormWrap>
                            <Form id='compute-form' onSubmit={handleSubmit}>
                                <Label htmlFor='sepal-length'>Sepal length</Label>
                                <Input type='number' step="0.00001" min="0" id='sepal-length'></Input>

                                <Label htmlFor='sepal-width'>Sepal width</Label>
                                <Input type='number' step="0.00001" min="0" id='sepal-width'></Input>

                                <Label htmlFor='petal-length'>Petal length</Label>
                                <Input type='number' step="0.00001" min="0" id='petal-length'></Input>

                                <Label htmlFor='petal-width'>Petal width</Label>
                                <Input type='number' step="0.00001" min="0" id='petal-width'></Input>
                            </Form>
                        </FormWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
      );
}

export default InputForm
