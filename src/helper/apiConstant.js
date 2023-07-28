export const BASE_URL = "http://67.205.176.136:5000";
export const VERSION = "/api/";
export const IMG_DIRECTORY = "slider_image";

const GET = "get";
const POST = "post";
const PUT = "put";
const DELETE = "delete";
const PATCH = "patch";

const apiConst = {
  login: `${BASE_URL}${VERSION}mukhya_member/login_mukhya_member`,
  fetchHeadline: `${BASE_URL}${VERSION}headline/mukhiya_fatch_headline`,
  headlineImg: `${BASE_URL}${VERSION}slider/mukhiya_fatch_all_slider_imgs`,
  addMember: `${BASE_URL}${VERSION}mukhya_member/add_member_details`,
  totalMemberDirector: `${BASE_URL}${VERSION}totalMemberDirecter`,
  villageMember: `${BASE_URL}${VERSION}village/members`,
  getMember: `${BASE_URL}${VERSION}member/get`,
  bloodDetails: `${BASE_URL}${VERSION}member/blood`,
  getAnyImages: `${BASE_URL}${VERSION}image?filename=`,
  businessDetail: `${BASE_URL}${VERSION}business/get`,
  addBusinessDetail: `${BASE_URL}${VERSION}business/create`,
  donerDetail: `${BASE_URL}${VERSION}datashree/get`,
  fetchNotification: `${BASE_URL}${VERSION}suchna/get`,
  fetchHeadofFamilyDetail: `${BASE_URL}${VERSION}motivation/get`,
  fetchNewsDetails: `${BASE_URL}${VERSION}news/get`,
  fetchAdsDetails: `${BASE_URL}${VERSION}advertisement/get`,
  fetchSponsorsDetails: `${BASE_URL}${VERSION}prayojak/get`,
  mukhiyaFamilyGet: `${BASE_URL}${VERSION}memberdetails/getAll`,
  fetchMukhiya: `${BASE_URL}${VERSION}mukhya_member/fatch_mukhiya_profile`,
  fetchCommity: `${BASE_URL}${VERSION}commitymember`,
};

export { GET, POST, PUT, DELETE, apiConst, PATCH };
