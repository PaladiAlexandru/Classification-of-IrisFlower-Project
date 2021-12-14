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

const submitForm = () => {
    console.log('submited')
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
    buttonTo,
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
                                    dark2={dark2 ? 1: 0}
                                    >{buttonLabel}</CustomButton>
                                </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <FormWrap>
                            <Form id='compute-form' onSubmit={submitForm()}>
                                <Label htmlFor='no-of-petals'>Number of petals</Label>
                                <Input id='no-of-petals'></Input>

                                <Label htmlFor='sepals-length'>Sepals length</Label>
                                <Input id='sepals-length'></Input>

                                <Label htmlFor='sepals-width'>Sepals width</Label>
                                <Input id='sepals-width'></Input>
                            </Form>
                        </FormWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
      );
}

export default InputForm
