interface IHelper {
  username: string;
  avatar: string;
  name: string;
  feedback?: string;
  location?: string;
  designation?: string;
  helped: Partial<IHelper>[];
}

export default IHelper;
