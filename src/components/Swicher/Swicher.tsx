import { v4 as uuidv4 } from 'uuid';

type SwicherProps = {
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

export const Swicher: React.FC<SwicherProps> = ({ checked, handleChange, children }) => {
  const id = uuidv4();

  return (
    <section>
      {children}
      <div className="swich-wrapper">
        <span className={`${checked ? "" : "active-off"}`}>OFF</span>
        <input
          type="checkbox"
          id={id}
          onChange={handleChange}
          checked={checked}
        />
        <label htmlFor={id}></label>
        <span className="active-on">ON</span>
      </div>
    </section>
  );
};
