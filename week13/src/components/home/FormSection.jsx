import React, { useContext, useState } from 'react'
import { ThemeColorContext } from '../../context/context'
import {Button, Card, Title, Wrapper} from '../layout/common';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import { UserInfoContext } from '../../context/UserInfoContext';


const FormSection = () => {
    const mode = useContext(ThemeColorContext);
    const navigate = useNavigate();
    const {dispatch} = useContext(UserInfoContext);

    const [formData, setFormData] = useState({
        name : '', 
        email : '', 
        birth : '', 
        gender : '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = () => {
        dispatch({
            type:'SAVE',
            payload: formData,
        })
        navigate('/mypage');
    }

  return (
    <Wrapper>
        <Card>
            <Title>회원 정보 입력</Title>
            <Form type = 'text' label='이름' name = 'name' value={formData.name} onChange={handleChange}/>
            <Form type = 'email' label='이메일' name='email' value={formData.email} onChange={handleChange}/>
            <Form type = 'date' label='생년월일' name='birth' value={formData.birth} onChange={handleChange}/>
            <Form label='성별' name='gender' value={formData.gender} onChange={handleChange}/>

            <Button
                mode = {mode.button}
                onClick = {handleSubmit}
            >
                제출하기
            </Button>
        </Card>
    </Wrapper>
  )
}

export default FormSection