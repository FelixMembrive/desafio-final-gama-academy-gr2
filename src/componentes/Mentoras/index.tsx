import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import './style.scss';

export default function Mentoras() {

    return (
        <div className="containerMentorias" style={{backgroundColor:'white'}}>
            <div className='Mentorias'>
                <h2>Mentoras</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo. Curabitur sapien purus, laoreet vel sollicitudin id, rutrum a urna. Sed mattis commodo libero, sit amet tempus eros molestie eget. Praesent elementum nisi id massa mattis, at interdum neque vulputate. In vulputate velit consectetur tortor tempus mollis.</p>
            </div>
            <div className="botao">
                <DropdownButton id="dropdown" title="Escolha a área de atuação profissional" >
                    <Dropdown.ItemText>UX/UI Design</Dropdown.ItemText>
                    <Dropdown.Item as="button">Front-End</Dropdown.Item>
                    <Dropdown.Item as="button">Back-End</Dropdown.Item>
                    <Dropdown.Item as="button">Data scientist</Dropdown.Item>
                    <Dropdown.Item as="button">Data Analytics</Dropdown.Item>
                    <Dropdown.Item as="button">Tech Recruiter</Dropdown.Item>
                    <Dropdown.Item as="button">Product Manager</Dropdown.Item>
                    <Dropdown.Item as="button">QA Tester</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    );
}