export const BASE_URL = "http://192.168.29.95:25060";
export const VERSION = "/api/";
export const IMG_DIRECTORY = "slider_image";

const GET = "get";
const POST = "post";
const PUT = "put";
const DELETE = "delete";

const apiConst = {
  login: `${BASE_URL}${VERSION}mukhya_member/login_mukhya_member`,
  fetchHeadline: `${BASE_URL}${VERSION}headline/mukhiya_fatch_headline`,
  headlineImg: `${BASE_URL}${VERSION}slider/mukhiya_fatch_all_slider_imgs`,
  addMember: `${BASE_URL}${VERSION}mukhya_member/add_member_details`,
  totalMemberDirector: `${BASE_URL}${VERSION}totalMemberDirecter`,
  villageMember: `${BASE_URL}${VERSION}village/members`,
  getMember: `${BASE_URL}${VERSION}member/get`,
  bloodDetails: `${BASE_URL}${VERSION}member/blood`,
};

export { GET, POST, PUT, DELETE, apiConst };
