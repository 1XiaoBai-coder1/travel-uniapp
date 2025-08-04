import http from "./http";

export const getBannerData=()=>{
	return http("/user/getBanner")
}