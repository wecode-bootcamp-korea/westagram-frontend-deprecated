__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var s=r(d[2]).connect(function(s,n){return{users:r(d[0]).getFeedAysfUsers(s,n)}},function(s){return{onSuggestionDismissed(n){s(r(d[1]).dismissFeedAysfSuggestion(n))}}})(i(d[3]));e.default=s},14090240,[10485773,20250963,5,13959170]);
__d(function(g,r,i,a,m,e,d){"use strict";function s(s){return!s.suggestedUsers.viewerHasFBConnect}Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0]).createSelector(s,r(d[1]).isFBConnectEligible,(s,t)=>!s&&(t&&!1!==i(d[2])._("125","0")&&!1!==i(d[2])._("127","2"))),n=r(d[0]).createSelector(s=>s.suggestedUsers.ids,s=>s.suggestedUsers.dismissedAysfIds,(s,t)=>s.subtract(t).toArray()),o=r(d[0]).createSelector(s=>s.suggestedUsers.dismissedAysfIds,(s,t)=>i(d[3])(t.userIds).map(t=>r(d[4]).getUserById(s,t)),(s,t)=>t.filter(t=>!s.has(t.id)).toArray()),u=r(d[0]).createSelector(s=>s.suggestedUsers.ids,s=>s.toArray());e.isViewerFacebookConnected=s,e.shouldDisplayFacebookConnect=t,e.getNonDismissedAysfIds=n,e.getProfileChainingFailure=function(s,t){return!!s.suggestedUsers.profileChainingFailures.get(t)},e.getProfileChainingSuggestions=function(s,t){return s.suggestedUsers.profileChainingSuggestions.get(t)},e.getFeedAysfUsers=o,e.getSuggestions=u,e.isInitialLoad=function(s){return s.suggestedUsers.isLoadingSuggestions&&0===s.suggestedUsers.ids.size}},10485773,[9,10485774,20250777,20316188,20250964]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const s=r(d[1])(1861),o=o=>{a(d[2]).useEffect(()=>{const{position:s,trackingToken:t,type:n}=o;null!=s&&r(d[3]).logNetEgoEvent({containerModule:r(d[3]).NETEGO_CONTAINER_MODULES.feed,eventName:'instagram_netego_impression',isFromNeedyUser:!0,position:s,trackingToken:t,type:n})},[o.position]);const{className:t,impressionModule:n,onSuggestionDismissed:l,users:_,variant:c}=o;return a(d[2]).createElement(i(d[4]),{analyticsContext:r(d[5]).CONNECTIONS_CONTAINER_MODULES.feed_timeline,chainingSuggestions:_,className:i(d[6])(t,`${c===r(d[7]).VARIANTS.narrow?"bq3Mi":""} ${c===r(d[7]).VARIANTS.wide?"vboSt":""} ${r(d[8]).isMobile()?"D_6tu":""} ${r(d[8]).isMobile()?"":"_6E_wP"}`),clickPoint:'feed_h_scroll_suggested_user_list',impressionModule:n,isSmallScreen:c===r(d[7]).VARIANTS.narrow,onSuggestionDismissed:l,seeAllHref:r(d[9]).DISCOVER_PEOPLE_PATH,showDescription:!0,title:s})};o.defaultProps={impressionModule:r(d[5]).VIEW_MODULES.hscroll_feed};var t=o;e.default=t},13959170,[13959171,20250684,3,13959172,13959173,20251239,20316210,20054712,20250631,20250840]);
__d(function() {},13959171,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});e.NETEGO_CONTAINER_MODULES={feed:"feed"},e.logNetEgoEvent=function({containerModule:t,eventName:o,isFromNeedyUser:n,position:c,trackingToken:_,type:s}){const l={is_from_needy_user:Boolean(n),position:c,device_model:r(d[0]).getBrowserString(),device_os:'Web',gap_to_last_netego:-1,primary_locale:r(d[1]).getLocale(),deviceid:r(d[2]).getDeviceOrMachineId(),tracking_token:_,type:s};r(d[3]).logPigeonEvent(r(d[4]).createEvent(o,r(d[3]).getExtra(l),{module:t}))}},13959172,[20250631,20250629,20250706,20250716,20250705]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=r(d[1])(3238),n={cardWidth:156,gapWidth:5,gutterWidth:20,height:208},o={cardWidth:176,gapWidth:24,gutterWidth:24,height:208};class s extends a(d[3]).Component{constructor(t){super(t),this.$FollowChainingList3=(()=>{this.$FollowChainingList1=!0,this.$FollowChainingList4(),this.props.onScrollEnter&&this.props.onScrollEnter()}),this.$FollowChainingList5=(()=>{this.$FollowChainingList1=!1,this.props.onScrollLeave&&this.props.onScrollLeave()}),this.$FollowChainingList6=(({leftPct:t,rightPct:n})=>{this.$FollowChainingList7=Math.max(0,Math.floor(t)),this.$FollowChainingList8=Math.max(0,Math.floor(n)),this.$FollowChainingList4()}),this.$FollowChainingList1=!1,this.$FollowChainingList2={}}$FollowChainingList4(){if(this.$FollowChainingList1&&null!=this.$FollowChainingList7&&null!=this.$FollowChainingList8&&null!=this.props.chainingSuggestions)for(let t=this.$FollowChainingList7;t<=this.$FollowChainingList8;++t){const n=this.props.chainingSuggestions[t];if(null!=n&&!this.$FollowChainingList2[n.id]){const{impressionModule:o}=this.props,s={targetId:n.id,containerModule:this.props.analyticsContext,position:t,viewModule:o};o===r(d[2]).VIEW_MODULES.web_profile_chaining?r(d[2]).logConnectionAction({eventName:'similar_user_impression',...s}):o!==r(d[2]).VIEW_MODULES.hscroll_feed&&o!==r(d[2]).VIEW_MODULES.end_of_feed||r(d[2]).logConnectionAction({eventName:'recommended_user_impression',...s}),this.$FollowChainingList2[n.id]=!0}}}render(){const{analyticsContext:s,chainingFailed:l,chainingSuggestions:h,className:c,clickPoint:p,impressionModule:u,isSmallScreen:C,onRetryClicked:w,onSuggestionDismissed:L,overscan:$,seeAllHref:E,showDescription:F,title:W}=this.props,S=C?n:o;let f=h&&h.map((t,n)=>a(d[3]).createElement(i(d[4]),{analyticsContext:s,clickPoint:p,impressionModule:u,isSmallScreen:C,key:t.id,onDismissed:L,position:n,showDescription:F,user:t}));return null!=f&&(f=f.map(t=>a(d[3]).createElement(r(d[5]).Box,{alignItems:"center",height:S.height,key:t.key,width:S.cardWidth+S.gapWidth},a(d[3]).createElement(r(d[5]).Box,{width:S.cardWidth},t)))),a(d[3]).createElement(i(d[6]),{className:i(d[7])(c,`ccgHY ${C?"l9Ww0":""} ${C?"":"GZkEI"}`),onScrollEnter:this.$FollowChainingList3,onScrollLeave:this.$FollowChainingList5},!0!==l&&!h&&a(d[3]).createElement("div",{className:"_7AQG4"},a(d[3]).createElement("p",null,t)),!0===l&&a(d[3]).createElement(i(d[8]),{className:"fNpwd",errorText:r(d[1])(82),onRetry:i(d[9])(w)}),!0!==l&&h&&a(d[3]).createElement("div",{className:"EM8Od"},a(d[3]).createElement("span",{className:"Rebts"},W),null!=E&&''!==E&&a(d[3]).createElement(i(d[10]),{href:E,onClick:this.props.onSeeAllClicked})),!0!==l&&h&&null!=f&&a(d[3]).createElement(r(d[5]).Box,{height:S.height},a(d[3]).createElement(i(d[11]),{gutterWidth:Math.max(0,S.gutterWidth-S.gapWidth/2),itemWidth:S.cardWidth+S.gapWidth,onVisibilityChange:this.$FollowChainingList6,overscan:$},f)))}}s.defaultProps={showDescription:!1};var l=s;e.default=l},13959173,[13959174,20250684,20251239,3,13959175,20316204,20054759,20316210,13238289,20316188,10485777,20316260]);
__d(function() {},13959174,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const o=77,t=54;var l=r(d[12]).withRouter(class extends a(d[5]).Component{constructor(...o){super(...o),this.$FollowCard4=(o=>{this.$FollowCard3('avatar'),o.stopPropagation()}),this.$FollowCard5=(o=>{this.$FollowCard3('username'),this.$FollowCard1(this.$FollowCard2()?'similar_username_tapped':'recommended_username_tapped'),o.stopPropagation()}),this.$FollowCard6=(o=>{this.$FollowCard3('follow'),this.$FollowCard1(this.$FollowCard2()?'similar_user_follow_button_tapped':'recommended_follow_button_tapped'),o.stopPropagation()}),this.$FollowCard7=(()=>{const{onDismissed:o,user:{id:t}}=this.props;this.$FollowCard1(this.$FollowCard2()?'similar_user_dismiss_tapped':'recommended_user_dismissed'),o&&o(t)}),this.$FollowCard8=(()=>{const{user:{username:o}}=this.props;null!=o&&''!==o||i(d[1])(0);const t=r(d[2]).buildUserLink(o);this.props.history.push(t)})}$FollowCard1(o){const{analyticsContext:t,impressionModule:l,position:s,user:n}=this.props;r(d[3]).logConnectionAction({eventName:o,position:s,targetId:n.id,containerModule:t,viewModule:l})}$FollowCard2(){return this.props.impressionModule===r(d[3]).VIEW_MODULES.web_profile_chaining}$FollowCard3(o){r(d[4]).logAction_DEPRECATED('chainingClick',{source:this.props.analyticsContext,target:o})}$FollowCard9(o){return o.length<33?o:o.substr(0,30)+'…'}$FollowCard10(){const{showDescription:o,user:{suggestionDescription:t}}=this.props;return o&&null!=t}$FollowCard11(){const{isSmallScreen:l,user:{profilePictureUrl:s,username:n}}=this.props;return null!=s&&''!==s||i(d[1])(0),a(d[5]).createElement(i(d[6]),{canTabFocus:!1,isLink:!0,onClick:this.$FollowCard4,profilePictureUrl:s,size:l?o:t,username:n})}$FollowCard12(){const{user:{fullName:o,isVerified:t,username:l}}=this.props;return null!=l&&''!==l||i(d[1])(0),null!=t||i(d[1])(0),a(d[5]).createElement(a(d[5]).Fragment,null,a(d[5]).createElement(i(d[7]),{className:"Qj3-a",onClick:this.$FollowCard5,username:l},!0===this.$FollowCard10()&&null!=o&&''!==o&&o.length>0?o:l),t&&a(d[5]).createElement(r(d[8]).Box,{marginStart:1},a(d[5]).createElement(r(d[8]).VerifiedBadge,null)))}$FollowCard13(){const{user:{fullName:o,suggestionDescription:t}}=this.props;return!0!==this.$FollowCard10()?a(d[5]).createElement("span",{className:i(d[9])('notranslate',"_7cyhW"),title:o},o):a(d[5]).createElement("span",{className:"_0p1Te",title:t},this.$FollowCard9(t))}$FollowCard14(){const{analyticsContext:o,clickPoint:t,user:{id:l,username:s}}=this.props;return a(d[5]).createElement(i(d[10]),{analyticsContext:o,analyticsExtra:{chn:1},clickPoint:t,fullWidth:!0,onClick:this.$FollowCard6,userId:l,username:s})}render(){const{analyticsContext:o,isSmallScreen:t,onDismissed:l}=this.props;return a(d[5]).createElement(i(d[11]),{analyticsContext:o,icon:this.$FollowCard11(),isSmallScreen:t,onClick:this.$FollowCard8,onDismissed:l?this.$FollowCard7:null,primaryCta:this.$FollowCard14(),primaryText:this.$FollowCard12(),secondaryText:this.$FollowCard13()})}});e.default=l},13959175,[13959176,9699436,20250883,20251239,20250716,3,20316250,20316253,20316204,20316210,10354784,13959177,6]);
__d(function() {},13959176,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]);var t=class extends a(d[3]).Component{constructor(...t){super(...t),this.$FollowChainingListItem2=(t=>{const{onDismissed:n}=this.props;this.$FollowChainingListItem1('dismiss'),n&&n(),t.stopPropagation()}),this.$FollowChainingListItem3=(()=>{const{onClick:t}=this.props;this.$FollowChainingListItem1('other'),t&&t()})}$FollowChainingListItem1(t){this.props.analyticsContext&&r(d[2]).logAction_DEPRECATED('chainingClick',{source:this.props.analyticsContext,target:t})}render(){const{icon:t,isSmallScreen:n,onDismissed:o,primaryCta:s,primaryText:l,secondaryText:c}=this.props;return a(d[3]).createElement("div",{className:"_41KYi",onClick:this.$FollowChainingListItem3,role:"button",tabIndex:"-1"},a(d[3]).createElement(r(d[4]).Box,{alignItems:"center",padding:n?4:5,width:"100%"},o&&a(d[3]).createElement("button",{alt:r(d[5])(3988),className:"fUzmR",onClick:this.$FollowChainingListItem2},a(d[3]).createElement("div",{className:`${n?"coreSpriteDismissSmall":""} ${n?"":"coreSpriteDismissLarge"}`})),a(d[3]).createElement(r(d[4]).Box,{marginBottom:n?2:5},t),a(d[3]).createElement(r(d[4]).Box,{alignItems:"center",direction:"row",justifyContent:"center",marginBottom:1,width:"100%"},l),a(d[3]).createElement(r(d[4]).Box,{alignItems:"center",direction:"row",justifyContent:"center",marginBottom:n?2:3,width:"100%"},c),s))}};e.default=t},13959177,[20316274,13959178,20250716,3,20316204,20250684]);
__d(function() {},13959178,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]);e.default=(({className:t,errorText:l,onRetry:c,...n})=>a(d[2]).createElement("div",{className:i(d[3])(t,"TqMen")},a(d[2]).createElement("button",{"aria-label":r(d[4]).RETRY_TEXT,className:"_1n6a3",onClick:c,tabIndex:"0"},a(d[2]).createElement("div",{className:"mEFkC coreSpriteReload"}),a(d[2]).createElement("div",{className:"JMO_o"},l||r(d[4]).FAILED_TO_LOAD_TEXT))))},13238289,[20316274,13238290,3,20316210,20250977]);
__d(function() {},13238290,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]);var t=t=>a(d[2]).createElement(i(d[3]),{className:"HUW1v hUQXy",href:t.href,onClick:t.onClick,params:t.params},r(d[4])(1177));e.default=t},10485777,[20316251,10485778,3,20316217,20250684]);
__d(function() {},10485778,[]);