import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import './style.scss';

export default function Mentoras() {

    return (
        <div className="containerMentorias" style={{backgroundColor:'white'}}>
            <div className='Mentorias'>
                <h2>Mentoras</h2>
                <p>As mentoras da Tech Delas são profissionais extremamente capacitadas e que amam compartilhar seus conhecimentos e ajudar outras mulheres se desenvolverem nas suas carreiras.</p>
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