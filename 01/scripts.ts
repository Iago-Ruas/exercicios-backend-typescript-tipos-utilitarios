type Usuario = {
    nome: string;
    email: string;
    cpf: string;
    rg: string;
    dataNacimento?: string;
};

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
};

type UsuarioSemRg = Omit<Usuario, "rg">;

const futuraImplementação = (info: UsuarioSemRg) => {
    return info;
};
