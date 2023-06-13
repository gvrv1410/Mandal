export const BASE_URL = "http://192.168.29.95:5000/";
export const VERSION = 'api/'
export const IMG_DIRECTORY = 'slider_image'

const GET = "get";
const POST = "post";
const PUT = "put";
const DELETE = "delete";

const apiConst = {
  login: `${BASE_URL}${VERSION}mukhya_member/login_mukhya_member`,
  fetchHeadline: `${BASE_URL}${VERSION}headline/fatch_headline`,
  headlineImg: `${BASE_URL}${VERSION}slider/fetch_all_slider_imgs`
};

export { GET, POST, PUT, DELETE, apiConst };
