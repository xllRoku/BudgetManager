const Alert = ({ alerta }) => {
  return (
    <div
      className={`${
        alerta.error ? "from-red-400 to-red-600" : "from-blue-400 to-blue-600"
      }  bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-2`}
    >
      {alerta.msg}
    </div>
  );
};

export default Alert;
