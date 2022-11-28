export interface IHero {
  title: string;
  description: string;
  image: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  _key: string;
  _type: string;
}

export interface IEventTimer {
  title: string;
  startingAt: Date;
  _key: string;
  _type: string;
}

export interface IList {
  title: string;
  subTitle: string;
  listItems: IListItem[];
  _key: string;
  _type: string;
}

export interface IListTwo {
  listItemsTwo: IListItem[];
  _key: string;
  _type: string;
}

export interface IListItem {
  title: string;
  subTitle: string;
  _key: string;
  _type: string;
  icon: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export interface IBlogList {
  title: string;
  description: string;
  listBlog: IBlogListItem[];
  _key: string;
  _type: string;
}

export interface IBlogListItem {
  title: string;
  description: string;
  slug: {
    current: string;
    _type: string;
  };
  __i18n_lang: string;
  mainImage: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  _id: string;
  _type: string;
}

export interface ISchedules {
  description: string;
  title: string;
  _id: string;
  _type: string;
  scheduleList: IScheduleDay[];
}

export interface IScheduleDay {
  day: string;
  date: string;
  _id: string;
  scheduleSpeakerList: IScheduleSpeaker[];
}

export interface IScheduleSpeaker {
  description: string;
  name: string;
  time: string;
  title: string;
  _id: string;
  image: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export interface IImageList {
  description: string;
  title: string;
  _key: string;
  _type: string;
  listImage: IImageListItem[];
}

export interface IImageListItem {
  title: string;
  subTitle: string;
  _key: string;
  _type: string;
  image: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export interface IGallery {
  title: string;
  description: string;
  _key: string;
  _type: string;
  galleryList: IGalleryItem[];
}

export interface IGalleryItem {
  image: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  _id: string;
}

export interface IQuestions {
  title: string;
  description: string;
  _key: string;
  _type: string;
  questionsList: IQuestionsList[];
}

export interface IQuestionsList {
  _key: string;
  questionsListItem: IQuestionsListItem[];
}

export interface IQuestionsListItem {
  title: string;
  description: string;
  _key: string;
}

export interface IPricing {
  title: string;
  description: string;
  _key: string;
  _type: string;
  pricingList: IPricingItem[];
}

export interface IPricingItem {
  title: string;
  price: string;
  btnText: string;
  icon: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  _key: string;
  textIconList: ITextIconItem[];
}

export interface ITextIconItem {
  icon: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  _key: string;
  title: string;
}

export interface INewsletter {
  btnText: string;
  title: string;
  inputText: string;
  _key: string;
  _type: string;
}

export interface IContact {
  btnText: string;
  title: string;
  _key: string;
  _type: string;
  description: string;
}
