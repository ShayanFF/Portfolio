interface Props {
    name: string;
    icon: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  }

const ContactFormInput: React.FC<Props> = ({ name, icon, onChange }) => {
  return (
    <div className='contact-input-container'>
        <label className='contact-label'>{name}</label>
        <div className='contact-combine'>
            <img className='contact-icon' src={icon} />
            <input className='contact-input' type={name} placeholder={'Your ' + name} required onChange={onChange} />
        </div>
    </div>
  )
}

export default ContactFormInput