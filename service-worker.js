/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2020/04/06/QUIC-协议/index.html","7e4ed4b655be27a09aa04d3a826c89f2"],["2020/04/06/TIME_WAIT 问题解决/index.html","18da7a6d7bf842e6a699605a55b165f3"],["2020/04/18/自建-Nginx-站点部署/index.html","f40b2cab4ef3e747dc0c529e99755217"],["2020/04/25/函数式编程思维/index.html","312bcc6e5230715e66e3dd71117fa229"],["2020/05/02/TLS-详解/index.html","9ba170ddee374b1a3aa64aad654ffe88"],["2020/05/04/TLS-详解-二/index.html","ee9522b204428277f021864a4d7ee7ad"],["2020/05/30/VMTrafficShark-自制弱网模拟器/index.html","5942de160f5a2247102d00a279ba92c0"],["2020/05/30/go-etcd-的基本操作/index.html","25a96332765ce5d2c2d8d8a71b2d5db7"],["2020/06/01/性能大杀器epoll/index.html","723bab5a155d4f2549220480dd9903b1"],["2020/06/13/Git-搜索小技巧/index.html","f12d430668901fbbbeaede61010f0876"],["2020/07/11/docker-容器技术基础/index.html","16f71f847bd94183b6944999210d2c6e"],["2020/07/18/理解协程/index.html","6809d0d23b3776b0c2997a47945bd52f"],["2020/07/22/Android-信任自签名证书/index.html","38e294de80a8dcbc298eaea814ffc178"],["2020/07/24/ubuntu20-04-部署-Kubernetes-k8s/index.html","724486541c4c54657836e48e65a88ae4"],["2020/08/22/Kubernetes-Pod/index.html","c3bc1ca5e3c25ce28e0c3f777bca4191"],["2020/09/20/systemd-基本概念/index.html","2f109bbe0196cd666c0a026291b1e179"],["2020/09/26/算法-数组/index.html","49a95fcf3689cc08d3ac8a2d3067fd10"],["2020/10/17/算法-二叉树/index.html","265d8497f6024276b66a654b2532e0f9"],["2020/10/24/设计模式（Design-Pattern）/index.html","fd19868c4cda46d0e9efbef47a37e400"],["2020/11/07/玩转-tshark-命令行工具/index.html","ec199223f0a5112f742c633a5b02d27f"],["2020/11/16/基于Nginx实现的RTMP服务/index.html","39cccce55afac13badf9d102278e88cf"],["2020/11/25/gRPC-Quick-Start/index.html","642d89f2eb7b562ab5f037762ec3a174"],["2020/12/19/Git-Quick-Start/index.html","8a3ff83f6443d9e349b9cee76b2ae174"],["2021/01/16/TLS详解（三）/index.html","49ae1d3f23b1da485eaacc87ae4dd938"],["2021/01/18/Go-Reflect/index.html","eb4a1ef8601244e3f6af7a3a30e59389"],["2021/01/23/探索-Webtransport/index.html","c75d0d07715fb36bc2010c56bdc2bdb4"],["2021/01/30/GoLang-函数式编程/index.html","cd67404d94b66e292ffe79efa864a36a"],["2021/02/21/HTTP3/index.html","1e1e48def012109ff25379a69bfd2633"],["2021/03/21/Worker-Pool-in-Golang/index.html","8dc35ad05b9c5d91349b646ddbd35728"],["2021/03/27/搭建我的ELK-7-2/index.html","6e7bf8fb940b2175a8619fa543b27b20"],["2021/04/29/Go-测试框架-stretchr-testify/index.html","1d1168a6718669cb0c51e47bceff12f5"],["2021/05/29/curl-命令小结/index.html","65bfe87a51a0a0546add676d0f063976"],["2021/06/05/如何减少TTFB以提高网页页面加载时间/index.html","d5b6f433c217c90fba36cf3bf567c4e8"],["2021/06/07/HTTP-2-特性概览/index.html","d4c4a040c17434f7b90e42d4b7124221"],["2021/07/10/Wireshark解析器Lua脚本/index.html","ef1ebc96895b0651c2aa2141f476a448"],["2021/07/24/QUIC-发生了什么/index.html","e0ff0ba8df0087d19e9e41134fe8e955"],["2021/07/31/尝试-Nginx-上使用HTTP3/index.html","d2711c3615f842bd66bcac00b6b90af6"],["2021/08/04/k8s-部署-Nginx-集群/index.html","d63d98099b24ba5e9a505105078ff1cb"],["2021/08/05/k8s架构拓扑/index.html","a941a7e23e546954f88bf2c6174d2a74"],["2021/09/05/Nginx-Ingress/index.html","af01ca523080492731eba81a65967c7e"],["2021/09/19/Service-Mesh-是什么？/index.html","3ed73e30d20be818cf836db1492ac040"],["2021/11/20/项目管理-编写Golang-MakeFile/index.html","86554d55841d24b0f9f3f7b5d09dbbf7"],["404.html","fcd98b94a25584afa4ebc2db7ded1c94"],["about/index.html","22233327f0e93ce5fa1dd889f0662c1d"],["archives/2020/04/index.html","c3988126d769ddd8590772a2bd5b9631"],["archives/2020/05/index.html","296f68dd98eac21c4c50a7f4a2dd2fb4"],["archives/2020/06/index.html","2c9bb504bd4d157005d10187618d4f11"],["archives/2020/07/index.html","e91f4e6fc04919a823d9414b429ec2d9"],["archives/2020/08/index.html","61f360cd82dcd428c78b8b761d01e266"],["archives/2020/09/index.html","d4caddf3395d5cef261e90efac0ecf76"],["archives/2020/10/index.html","d454c54515d2e0301cf4d25067f45e1c"],["archives/2020/11/index.html","d5c014b4741d25e3077b74891f0e42db"],["archives/2020/12/index.html","1320e88654f8ff9642267b8aa4c03b68"],["archives/2020/index.html","42c513526a0d449f1bd94cf60dca9dca"],["archives/2020/page/2/index.html","57b59d1b41f2ccd3dc0c61d237434844"],["archives/2020/page/3/index.html","563a0e11cedd83d51a9fb8c59df6bb2e"],["archives/2021/01/index.html","96c4289587556d7ddce37f83e41d65bd"],["archives/2021/02/index.html","4fc249ded9eee3ab659384ce92eef618"],["archives/2021/03/index.html","52f34456d36541161514364508e328e0"],["archives/2021/04/index.html","96b9459bc04a0d74e74251c591df76a8"],["archives/2021/05/index.html","803c775bfe0aa7b3419b904dcde3c1c3"],["archives/2021/06/index.html","053e93ba281b22a41cdf142d3206c228"],["archives/2021/07/index.html","c0074287008042f56cf8f643af0c18d8"],["archives/2021/08/index.html","8ac40023c4ced6d0bbcb9b24bdb32b45"],["archives/2021/09/index.html","fa98c30ff24c2aa5837ee2000f35341b"],["archives/2021/11/index.html","54a64a9c7889a1aff490b8b7993a9f71"],["archives/2021/index.html","cd93dceb77f4f250268707192709fff0"],["archives/2021/page/2/index.html","185727693dc65b3e873950897278cd6b"],["archives/index.html","52e25f6a9399d7149cf2f82536f28fbb"],["archives/page/2/index.html","285fdafc6a86160bd85bef6d04f6aaf6"],["archives/page/3/index.html","1ded32d7d3f5295fa4cb69182002c510"],["archives/page/4/index.html","e4c848c16f66983ecce597382407be5a"],["archives/page/5/index.html","fa750815823da4376a0244f43eb0285d"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/Linux/index.html","af0df3f82691d13e81f061f1b750e977"],["categories/Nginx/index.html","81c798b0a1835d8ea8f69fcfd57ccf86"],["categories/QUIC/index.html","dcb8efa6d7e04e06e88bf8284374b4cd"],["categories/algorithm/index.html","4b131221bf0fa3ba926b831ad333e763"],["categories/docker/index.html","ac2a63810a7754d8fce8c28d8f9d241b"],["categories/etcd/index.html","462c146581f0f3b6cf6d6ba116da48fa"],["categories/git/index.html","7f4b0f9b9ff5d933994b233d542e4d61"],["categories/index.html","8a82c5497637151fa20aa2b1da536354"],["categories/k8s/index.html","acd03f3254c905a1cba6e1cf9f6fac44"],["categories/network/index.html","59324770c9e5fbd753ebf285088b07cd"],["categories/network/page/2/index.html","bc230ed79f21103658441d4b47f64cb6"],["categories/programming/index.html","fb850f01864ab98a1a17e898f0a58462"],["categories/运维/index.html","ac659f0c14ec4353608452a11d7a3286"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","5a2c720aa55e35eb27c8b8a0306c5f02"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["express/index.html","c859bc0592ad03d6932c52e05846f126"],["images/coroutines/coroutine_stack.png","e23240a5194471d67a90f97f81972f74"],["images/coroutines/goroutine_NonPreemptive.png","c6d7ed912a4b7ff4c8cc87cdd0f64913"],["images/coroutines/goroutine_dispatch.png","35d07b05c1b17dd7f9b04abf1faefa84"],["images/docker/aufs_image.png","0903c411c111b2ab4fea7bddcd847604"],["images/docker/cgroups.png","6830e1ce386d12c92ce18fbe615d7efb"],["images/docker/cgroups_docker.png","5254b3b1488b47f89b1250fead32d0db"],["images/docker/docker-cgroups.jpg","82722ce557f5accb3ca4cd9ab8cf94ae"],["images/docker/docker_namespace.png","cdd6cd6b13b4078030681656e98f8a4b"],["images/etcd/etcd.png","c6c02a686233012a749cc4f0bcd81ba9"],["images/etcd/raft_a_consensus_algorithm_for_replicated_logs_1440-21.jpg","0df643d5cfb68ecaac1031275c2a7d3c"],["images/git/advance_search.png","35147a82959c82b4f472ad70764d7c71"],["images/git/branches.png","2c14dd73e26e16189ff796a876841bac"],["images/git/git.png","d00f9e93c972af6182082d7236b4f910"],["images/git/git_commit_tree_blob.png","ef7bc30d35466f4037e9fd821d6e7efe"],["images/git/github_develop.png","884c0f1eff4ba87ef015d9278ae0b8c5"],["images/git/github_feature.png","2a1e21da7d19e5f29ff88b0a23b1e2f1"],["images/git/github_marketplace.png","4915a4ec05746798472a0c8bc58df899"],["images/git/search_date.png","01ae4e9160fab9f1eb4c301a64f3c87c"],["images/git/search_readme.png","c729506900d7c2e2053a9fce900e66d0"],["images/k8s/k8s.png","6efb359baac4e017f1cd5697f4d5eaef"],["images/k8s/k8s_dashboard.png","9fe264d9539dcefef22e0639c5314d73"],["images/k8s/k8s_infra.png","8c016391b4b17923f38547c498e434cf"],["images/k8s/k8s_infra1.png","154bb99796a3792c61331d4fa3bfb1b8"],["images/leetcode/tree_1.jpg","ab103822e75b5b15c615b68560cb2416"],["images/live/live.jpg","8d587b0774eaa3809d00136391bcad00"],["images/network/AndroidRoot/android_root.png","596677b0098792ca5fbd3cbf758752dc"],["images/network/AndroidRoot/cert_fqdn.png","3fa2ca2f44d362aaa1ed44f965c354e5"],["images/network/AndroidRoot/cert_san.png","2597f03a4e1e26d9cc270cb573efee9c"],["images/network/AndroidRoot/cert_sign.png","afbc1a3fb253bab38c900a973d81125c"],["images/network/HTTP2/binary-protocols-2.png","d058ffece9d16d18bf9f4a544abf381a"],["images/network/HTTP2/http-requests.png","34236ac646d59d85c845c10652ee7619"],["images/network/HTTP2/http-timeline.png","55290b645accaa405949238e30dcfb63"],["images/network/HTTP2/http2-hpack-compression.png","990e7b56853f517a7e3b9ea496606c62"],["images/network/HTTP2/http2-push.png","174c9854f8c40f84c13565afff7574b4"],["images/network/HTTP2/http2-streams.png","cf632d55f86ece1514a336b4b8ac6203"],["images/network/HTTP2/http2-weight.png","5b86b53561b7d78005f5df380156602a"],["images/network/QUIC/ack_delay.jpg","13cc900f346ed607cbbfaf30466a0032"],["images/network/QUIC/gquic-stack.png","a045101397b293777a61ad1986dd89bc"],["images/network/QUIC/quic_0rtt.gif","95f5c7e411d0b7f96d182abe284be551"],["images/network/QUIC/quic_frame.png","6bace45b16daa252110f97731880707a"],["images/network/QUIC/quic_frame_stream.png","10874d334349349559835ad4d4c92b4c"],["images/network/QUIC/quic_frame_type.png","ce94525f7b3e794a8f2957ed9f8c5699"],["images/network/QUIC/quic_http3.png","12b117914de00014f90d1adf12875861"],["images/network/QUIC/quic_layer.png","ab3283383013b707d1420b6b4cb8517c"],["images/network/QUIC/quic_longpacket.png","5ecc19ba9106179cd3443eefc1d6b8b4"],["images/network/QUIC/quic_longpacket_pcap.png","0b87ff18e08796de55b6768925eb2ca2"],["images/network/QUIC/quic_rt.jpg","bf74dace58c25b2f3a532c729861ff63"],["images/network/QUIC/quic_shortpacket.png","f41634797dfafead4535c3e94ea5f226"],["images/network/QUIC/quic_shortpacket_pcap.png","8a90e2885273a9629657ccd1372dba3e"],["images/network/QUIC/quic_stream_id.png","ae1dbf30467e8a7684d337701f055c0a"],["images/network/QUIC/tcp_rt.jpg","e3d5ec9e207f1c0118767aaa9d34a528"],["images/network/QUIC/tls_record.png","eab243d407a010363231982de34acb38"],["images/network/TLSDetailAnalysis/AES_Encrpyt.png","ba1b2fddc59677427901d9b9a1b2961d"],["images/network/TLSDetailAnalysis/CBC_encryption.png","9e2b40f677d4261dce2d36e2d9c1ae32"],["images/network/TLSDetailAnalysis/CTR_encryption.svg","4d9317e0640a84dba1dc08ad8adc3d8a"],["images/network/TLSDetailAnalysis/Certificate.png","91047079e7e3c37cbc850a7917139e9f"],["images/network/TLSDetailAnalysis/Diffie-Hellman.png","7ab7e4852ac78249fea33e918e6e1ab8"],["images/network/TLSDetailAnalysis/ECB.jpg","fc5ab2e7455550438442751116ba11b3"],["images/network/TLSDetailAnalysis/ECB_encryption.png","4a4607b52607a19d9b977c12c0185ba5"],["images/network/TLSDetailAnalysis/ECDHE.png","bf2cda1f351c70dd3cf3a9f277de4f1d"],["images/network/TLSDetailAnalysis/Message_Authentication_Code.png","10811ef913f94962eb5a749ec49a7c0c"],["images/network/TLSDetailAnalysis/TLS.png","23869e7f4147bbd8782c8501b2aa6dc4"],["images/network/TLSDetailAnalysis/XOR.png","5b2b73658c9f47effcf4712512917ca4"],["images/network/TLSDetailAnalysis/change_cipher_space.png","b7d3eb4a548960d4b84b67bf76b6870c"],["images/network/TLSDetailAnalysis/client_hello.png","f5f10b8c0f3c27cff477834a59be487b"],["images/network/TLSDetailAnalysis/client_key_exchange.png","7e7bb35439cc2acb3fdb2e07ef455b4b"],["images/network/TLSDetailAnalysis/encript-for-security.jpg","78523a1153253699a9f0b48efad40f4f"],["images/network/TLSDetailAnalysis/ocsp.png","5c3f7b4b05ea9777c89b11de8f2a7809"],["images/network/TLSDetailAnalysis/server_hello.png","ae5b11007207393fa356d7534b105d8c"],["images/network/TLSDetailAnalysis/server_hello_down.png","dd4026f13a1e5c0835995661fa7d8994"],["images/network/TLSDetailAnalysis/server_key_exchange.png","d607a51297f87ebc17d7d91e64aaf081"],["images/network/TLSDetailAnalysis/ssl_handshake_diffie_hellman.jpg","ac1ab9de94d13ba67764aef2a6046f47"],["images/network/TLSDetailAnalysis/ssl_handshake_rsa.jpg","0c8452265ea781fa01b487dd7f6e3adc"],["images/network/TLSDetailAnalysis/tcp_tls.png","0c0147ab6adb6991df744cf6329d6138"],["images/network/TLSDetailAnalysis/tls-1.3-handshake-clienthello.png","8d6df70c1bc0aac7b5e6f2249ff75bb5"],["images/network/TLSDetailAnalysis/tls-1.3-handshake-performance.png","dc3c96f49b774d32cf904ebf4197b043"],["images/network/TLSDetailAnalysis/tls-1.3-handshake-serverhello.png","d1a4bdd94afcdd115aebc0f8262947ef"],["images/network/TLSDetailAnalysis/tls-1.3-pre_shared_key.png","5e225314e781808cecbec4a7dc4b83e6"],["images/network/TLSDetailAnalysis/tls-1.3-psk_key_exchange_modes.png","d7be813b698c0119d784a7c83554e108"],["images/network/TLSDetailAnalysis/tls-1.3.png","d1b7a5f94c27c4c2ace9e0f2d32ff59a"],["images/network/TLSDetailAnalysis/tls_ciphersuite.png","7929f876fc662bde70578e6680b110d0"],["images/network/TLSDetailAnalysis/two-parts-of-gcm-l.jpg","cd0100f6a0eaa09d2aadf53e411bf1cd"],["images/network/VMTrafficShark/eth1.png","10b833dd952024bcec8da0774647d44b"],["images/network/VMTrafficShark/mitmproxy.png","f242362b0aacfcdc555aebf7c739d697"],["images/network/VMTrafficShark/net_interface_usb.png","0ae5c086452c9ca90654449b438678c3"],["images/network/VMTrafficShark/netinterface_driver_install.png","7d22333d78006c503c67af15cdff824c"],["images/network/VMTrafficShark/traffic_test.png","1798e19828d15c870f1d276cd81005fa"],["images/network/VMTrafficShark/vmtrafficshark.png","8215e680c8a3b38b8828cb5673e5e311"],["images/network/VMTrafficShark/wifi.png","36109cec7fdb8f4b70eae3dc2dd2f064"],["images/network/WebTransport/common_transport_requirements.png","d109983d0d9c0db046ad4e8540736d1a"],["images/network/WebTransport/qvis.png","f45dedf1f5d8ea3ab2db8fc67253028d"],["images/network/WebTransport/webtransport_client.png","0a419dadecdf339b9258e7e535a9fc4d"],["images/network/WebTransport/wq-vvv-01_alpn.png","de6686260dc69f13a982620a9efea860"],["images/network/epoll/Nginx.png","8f67e40a56dbfc3cc56bde911c043514"],["images/network/epoll/c10k.jpg","4f9a6125fe71aee973079f944eb37fc4"],["images/network/epoll/epoll_API.png","0e02437faa4f13b15fdbc46c5627c21d"],["images/network/epoll/io.png","96c1a438bc84baabcddc0e45697e1f67"],["images/network/epoll/libevent-benchmark2.jpg","1eab86b7aa51eb976c9f1738cd94e594"],["images/network/gRPC/grpc_concept_diagram.png","4cbf0f8158276383fc408fedfb242bce"],["images/network/gRPC/grpc_v1.png","e82f3dc48a6cd2829e471e46f180a13e"],["images/network/gRPC/grpc_v2.png","4388d3cf40e8eb513277cc58374bbd20"],["images/systemd/systemd.png","b8bfdcba19ee3ae6a63c25680f2c9043"],["images/systemd/systemd_components2.png","98ddb4023999e074a2e92b01a044f134"],["images/tshark/pcap_file_format.png","401e224372f15d1ae3ce50fe557e3039"],["images/tshark/tshark_capture.png","e815baa99ddfd0eceb64fc34415fcc67"],["images/tshark/tshark_conv.png","7b13a40db44c91033be4af208fbdf40f"],["images/tshark/tshark_o.png","2a824abe5bab11858d5c35346dbe5bbe"],["images/tshark/tshark_throughput.png","c462386c90990f8228fe81901823a216"],["images/tshark/tshark_z.png","2e9ea2a03695b7f138641cf741aeef33"],["images/tshark/wireshark_throughput.png","97c41676877ff24fdc009392c6774d4f"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.jpg","61ea0eed7ab70f213815f633a25e61f3"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["img/background_1.jpg","02ff00c5e8681bd8c7e2e07a799fd881"],["img/background_2.jpg","7c4c58794916322a1b4dd1d67b7d502f"],["img/background_3.jpg","570092523001e0f3ddbe1b8cfb126b76"],["img/background_4.jpg","08fe86f81d4953846371b25c1a2ec13b"],["img/favicon-16x16-dragon.png","c39e3ab111a2707d2111f73177cce583"],["index.html","69e921e14325707f82807196c37cc372"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","603fa932f3ec986228c2136a51a14f94"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","4cd359eeaa7b6b2aa70a2cdfc66ed767"],["page/3/index.html","e788f94f02e3f23d2e65c5c580b08a22"],["page/4/index.html","2bd6fc01bcad9e8dc0162f0fa56bfab1"],["page/5/index.html","7f6495a29a393c042faad37fb6c83115"],["static/images/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["static/images/avatar.jpg","61ea0eed7ab70f213815f633a25e61f3"],["static/images/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["static/images/backgroud.jpg","895b15c0992b7b39fcf8c49f5f945382"],["static/images/backgroud_dq.jpg","fb497c6d568cfe58a81f7f95c5460ea6"],["static/images/backgroud_sbpk.jpg","d8168e91766d0292f69919525c8e72b7"],["static/images/background_mac.jpg","bfe60a62c6e9807ec6aacfdfebaf0400"],["static/images/coroutines/coroutine_stack.png","e23240a5194471d67a90f97f81972f74"],["static/images/coroutines/goroutine_NonPreemptive.png","c6d7ed912a4b7ff4c8cc87cdd0f64913"],["static/images/coroutines/goroutine_dispatch.png","35d07b05c1b17dd7f9b04abf1faefa84"],["static/images/docker/aufs_image.png","0903c411c111b2ab4fea7bddcd847604"],["static/images/docker/cgroups.png","6830e1ce386d12c92ce18fbe615d7efb"],["static/images/docker/cgroups_docker.png","5254b3b1488b47f89b1250fead32d0db"],["static/images/docker/docker-cgroups.jpg","82722ce557f5accb3ca4cd9ab8cf94ae"],["static/images/docker/docker_hub.png","eb44ef4fc50fa60fdd482ce03ece7f8c"],["static/images/docker/docker_namespace.png","cdd6cd6b13b4078030681656e98f8a4b"],["static/images/elk/cerebro.png","0449b5bc407086ddbaf3861ac9b8ad91"],["static/images/elk/elk.png","7109725ccabf19e3e198d8fa4dce285c"],["static/images/elk/kinana_home.png","485eb56b6d841fd1847d6a6e3b953f8e"],["static/images/etcd/etcd.png","c6c02a686233012a749cc4f0bcd81ba9"],["static/images/etcd/raft_a_consensus_algorithm_for_replicated_logs_1440-21.jpg","0df643d5cfb68ecaac1031275c2a7d3c"],["static/images/favicon-16x16-dragon.png","c39e3ab111a2707d2111f73177cce583"],["static/images/git/advance_search.png","35147a82959c82b4f472ad70764d7c71"],["static/images/git/branches.png","2c14dd73e26e16189ff796a876841bac"],["static/images/git/git.png","d00f9e93c972af6182082d7236b4f910"],["static/images/git/git_base_workflow.png","94c54a77feb8e6786d618d3652afaaa5"],["static/images/git/git_commit_tree_blob.png","ef7bc30d35466f4037e9fd821d6e7efe"],["static/images/git/git_workfull.png","7491646bcb6ddc2ff1833fc225f6a14d"],["static/images/git/github_develop.png","884c0f1eff4ba87ef015d9278ae0b8c5"],["static/images/git/github_feature.png","2a1e21da7d19e5f29ff88b0a23b1e2f1"],["static/images/git/github_marketplace.png","4915a4ec05746798472a0c8bc58df899"],["static/images/git/search_date.png","01ae4e9160fab9f1eb4c301a64f3c87c"],["static/images/git/search_readme.png","c729506900d7c2e2053a9fce900e66d0"],["static/images/k8s/ingress/ingress.png","773577162f2de139c5355d524453e947"],["static/images/k8s/ingress/ingress_annotations.png","bc5e3bacf1d110d39c105fb2099fe0ff"],["static/images/k8s/ingress/ingress_dynamic_stress.png","dd680c189448dfb35526a9d23ee34491"],["static/images/k8s/ingress/ingress_static_stress.png","ef1990e6e8a729c77c11ebeeb25e5059"],["static/images/k8s/ingress/jaeger_trace.png","d8dcaa76703c33331ff70d3eb2c31e55"],["static/images/k8s/ingress/virtual_server.png","bc957c409e0c5c431d02d0e6b1dd73a9"],["static/images/k8s/k8s.png","6efb359baac4e017f1cd5697f4d5eaef"],["static/images/k8s/k8s_dashboard.png","9fe264d9539dcefef22e0639c5314d73"],["static/images/k8s/k8s_infra.png","8c016391b4b17923f38547c498e434cf"],["static/images/k8s/k8s_infra1.png","154bb99796a3792c61331d4fa3bfb1b8"],["static/images/k8s/k8s_nginx_deploy.png","14a799332d5aeb00f31059812a4e07bc"],["static/images/k8s/service_nodeport.png","260023ad3a904536c891f4ec1f087161"],["static/images/k8s/service_nodeport_1.png","18b77bd92b09b4838457c8ea300f7e00"],["static/images/k8s/structure/k8s_cluster_1.png","ccc0f2c8877877a61c4322c7dbcfdf29"],["static/images/k8s/structure/k8s_network_cni0.jpg","dc1c86f8156c66bbdd59d564761b9bfd"],["static/images/k8s/structure/k8s_network_cni0_1.png","91bc201274afe76156efc5a358dcf447"],["static/images/k8s/structure/k8s_network_flannel.png","e04c5bb9cbfb6aeabe5ba0b929af6095"],["static/images/k8s/structure/k8s_network_vxlan.png","8c7686813aec5bd642542669412b4e22"],["static/images/k8s/structure/k8s_struct.png","2e22dde56a1cf869b3fa38dc43c38111"],["static/images/leetcode/tree_1.jpg","ab103822e75b5b15c615b68560cb2416"],["static/images/live/live.jpg","8d587b0774eaa3809d00136391bcad00"],["static/images/makefile/grammar1.png","e9179aefc6e72afda70b4138f610b791"],["static/images/network/AndroidRoot/android_root.png","596677b0098792ca5fbd3cbf758752dc"],["static/images/network/AndroidRoot/cert_fqdn.png","3fa2ca2f44d362aaa1ed44f965c354e5"],["static/images/network/AndroidRoot/cert_san.png","2597f03a4e1e26d9cc270cb573efee9c"],["static/images/network/AndroidRoot/cert_sign.png","afbc1a3fb253bab38c900a973d81125c"],["static/images/network/HTTP2/binary-protocols-2.png","d058ffece9d16d18bf9f4a544abf381a"],["static/images/network/HTTP2/h2load.png","788b51b02497a52d367a17579a6a973c"],["static/images/network/HTTP2/http-requests.png","34236ac646d59d85c845c10652ee7619"],["static/images/network/HTTP2/http-timeline.png","55290b645accaa405949238e30dcfb63"],["static/images/network/HTTP2/http2-flow-control0.png","656c6b7b9c3b35c820eb30023d101199"],["static/images/network/HTTP2/http2-flow-control1.png","53c3547aac80dbfe1a9287dff063d6e1"],["static/images/network/HTTP2/http2-flow-control2.png","e9a1db60f963faddd9fa787d4b2d407d"],["static/images/network/HTTP2/http2-flow-control3.png","95e0f7540ee0056d2c661e47d6a104ee"],["static/images/network/HTTP2/http2-flow-control4.png","d67eda4baba629609d14f6b000e1334f"],["static/images/network/HTTP2/http2-hpack-compression.png","990e7b56853f517a7e3b9ea496606c62"],["static/images/network/HTTP2/http2-hpack-table.png","3a14f0bb91f60b2628f03e2da872a3b8"],["static/images/network/HTTP2/http2-hpack1.png","a1df88f66923f4ce244e675e8e4862f6"],["static/images/network/HTTP2/http2-hpack2.png","9434af72174457cdd15f2e680db8bf68"],["static/images/network/HTTP2/http2-hpack3.png","623f394ebc756107f28ddf4f6791c6f8"],["static/images/network/HTTP2/http2-push.png","174c9854f8c40f84c13565afff7574b4"],["static/images/network/HTTP2/http2-serverpush.png","0d72e14176694aba7a4e0c4552a635a9"],["static/images/network/HTTP2/http2-streams.png","cf632d55f86ece1514a336b4b8ac6203"],["static/images/network/HTTP2/http2-weight.png","5b86b53561b7d78005f5df380156602a"],["static/images/network/HTTP2/huffman_tree.png","575e458ed1af80b9c9bfbc7bbe5cd383"],["static/images/network/QUIC/ack_delay.jpg","13cc900f346ed607cbbfaf30466a0032"],["static/images/network/QUIC/gquic-stack.png","a045101397b293777a61ad1986dd89bc"],["static/images/network/QUIC/http1_refactor.png","4dc433e0baf58cd12ff07f876d40f8c8"],["static/images/network/QUIC/http_protocol_versions.png","9d41178419362891616113c5faf92e55"],["static/images/network/QUIC/qpack.png","e7a55dcd5eecc8986ce35e283ae3cb84"],["static/images/network/QUIC/quic_0rtt.gif","95f5c7e411d0b7f96d182abe284be551"],["static/images/network/QUIC/quic_0rtt.png","5a9e72e791e175b86d95410077720e00"],["static/images/network/QUIC/quic_1rtt.png","2086baa9dc8617580483fa1c95dbf5df"],["static/images/network/QUIC/quic_adoption.png","b22ff6f1b847fe0f6d66893f5202d490"],["static/images/network/QUIC/quic_capture_handshake.png","ec75aff3c598f9889a5420223dfb985d"],["static/images/network/QUIC/quic_connection_id.png","e7c88213ac21d7ad9eeeb18e1d85699d"],["static/images/network/QUIC/quic_frame1.png","22499018ab769a31a2987c97391d373b"],["static/images/network/QUIC/quic_frame_stream.png","10874d334349349559835ad4d4c92b4c"],["static/images/network/QUIC/quic_frame_type.png","ce94525f7b3e794a8f2957ed9f8c5699"],["static/images/network/QUIC/quic_http3.png","12b117914de00014f90d1adf12875861"],["static/images/network/QUIC/quic_http3_check.png","89351ecf7a086c443760a4504d0fecf4"],["static/images/network/QUIC/quic_interop.png","af95112e2ec79c658493772490a68cf7"],["static/images/network/QUIC/quic_layer.png","ab3283383013b707d1420b6b4cb8517c"],["static/images/network/QUIC/quic_longpacket.png","5ecc19ba9106179cd3443eefc1d6b8b4"],["static/images/network/QUIC/quic_longpacket_pcap.png","0b87ff18e08796de55b6768925eb2ca2"],["static/images/network/QUIC/quic_rt.jpg","bf74dace58c25b2f3a532c729861ff63"],["static/images/network/QUIC/quic_shortpacket.png","f41634797dfafead4535c3e94ea5f226"],["static/images/network/QUIC/quic_shortpacket_pcap.png","8a90e2885273a9629657ccd1372dba3e"],["static/images/network/QUIC/quic_stream_frame.png","7906f6515d0e6ccfc6a14b420a75452c"],["static/images/network/QUIC/quic_stream_id.png","ae1dbf30467e8a7684d337701f055c0a"],["static/images/network/QUIC/quic_stream_type.png","f3b61a02f819c85501371b3415eb16f2"],["static/images/network/QUIC/quic_struct.png","10b20ca23f1c3eecc48d8e4b56779b03"],["static/images/network/QUIC/quic_version.png","dad24319f7bff129f38e0b952c17cb51"],["static/images/network/QUIC/qvis_quictools_info.png","4705c45f1da5651d10c9436335a43ea1"],["static/images/network/QUIC/tcp_rt.jpg","e3d5ec9e207f1c0118767aaa9d34a528"],["static/images/network/QUIC/tls_record.png","eab243d407a010363231982de34acb38"],["static/images/network/TLSDetailAnalysis/AES_Encrpyt.png","ba1b2fddc59677427901d9b9a1b2961d"],["static/images/network/TLSDetailAnalysis/CBC_encryption.png","9e2b40f677d4261dce2d36e2d9c1ae32"],["static/images/network/TLSDetailAnalysis/CTR_encryption.svg","4d9317e0640a84dba1dc08ad8adc3d8a"],["static/images/network/TLSDetailAnalysis/Certificate.png","91047079e7e3c37cbc850a7917139e9f"],["static/images/network/TLSDetailAnalysis/Diffie-Hellman.png","7ab7e4852ac78249fea33e918e6e1ab8"],["static/images/network/TLSDetailAnalysis/ECB.jpg","fc5ab2e7455550438442751116ba11b3"],["static/images/network/TLSDetailAnalysis/ECB_encryption.png","4a4607b52607a19d9b977c12c0185ba5"],["static/images/network/TLSDetailAnalysis/ECDHE.png","bf2cda1f351c70dd3cf3a9f277de4f1d"],["static/images/network/TLSDetailAnalysis/Message_Authentication_Code.png","10811ef913f94962eb5a749ec49a7c0c"],["static/images/network/TLSDetailAnalysis/TLS.png","23869e7f4147bbd8782c8501b2aa6dc4"],["static/images/network/TLSDetailAnalysis/XOR.png","5b2b73658c9f47effcf4712512917ca4"],["static/images/network/TLSDetailAnalysis/change_cipher_space.png","b7d3eb4a548960d4b84b67bf76b6870c"],["static/images/network/TLSDetailAnalysis/client_hello.png","f5f10b8c0f3c27cff477834a59be487b"],["static/images/network/TLSDetailAnalysis/client_key_exchange.png","7e7bb35439cc2acb3fdb2e07ef455b4b"],["static/images/network/TLSDetailAnalysis/encript-for-security.jpg","78523a1153253699a9f0b48efad40f4f"],["static/images/network/TLSDetailAnalysis/ocsp.png","5c3f7b4b05ea9777c89b11de8f2a7809"],["static/images/network/TLSDetailAnalysis/server_hello.png","ae5b11007207393fa356d7534b105d8c"],["static/images/network/TLSDetailAnalysis/server_hello_down.png","dd4026f13a1e5c0835995661fa7d8994"],["static/images/network/TLSDetailAnalysis/server_key_exchange.png","d607a51297f87ebc17d7d91e64aaf081"],["static/images/network/TLSDetailAnalysis/ssl_handshake_diffie_hellman.jpg","ac1ab9de94d13ba67764aef2a6046f47"],["static/images/network/TLSDetailAnalysis/ssl_handshake_rsa.jpg","0c8452265ea781fa01b487dd7f6e3adc"],["static/images/network/TLSDetailAnalysis/tcp_tls.png","0c0147ab6adb6991df744cf6329d6138"],["static/images/network/TLSDetailAnalysis/tls-1.3-handshake-clienthello.png","8d6df70c1bc0aac7b5e6f2249ff75bb5"],["static/images/network/TLSDetailAnalysis/tls-1.3-handshake-performance.png","dc3c96f49b774d32cf904ebf4197b043"],["static/images/network/TLSDetailAnalysis/tls-1.3-handshake-serverhello.png","d1a4bdd94afcdd115aebc0f8262947ef"],["static/images/network/TLSDetailAnalysis/tls-1.3-pre_shared_key.png","5e225314e781808cecbec4a7dc4b83e6"],["static/images/network/TLSDetailAnalysis/tls-1.3-psk_key_exchange_modes.png","d7be813b698c0119d784a7c83554e108"],["static/images/network/TLSDetailAnalysis/tls-1.3.png","d1b7a5f94c27c4c2ace9e0f2d32ff59a"],["static/images/network/TLSDetailAnalysis/tls_ciphersuite.png","7929f876fc662bde70578e6680b110d0"],["static/images/network/TLSDetailAnalysis/two-parts-of-gcm-l.jpg","cd0100f6a0eaa09d2aadf53e411bf1cd"],["static/images/network/VMTrafficShark/eth1.png","10b833dd952024bcec8da0774647d44b"],["static/images/network/VMTrafficShark/mitmproxy.png","f242362b0aacfcdc555aebf7c739d697"],["static/images/network/VMTrafficShark/net_interface_usb.png","0ae5c086452c9ca90654449b438678c3"],["static/images/network/VMTrafficShark/netinterface_driver_install.png","7d22333d78006c503c67af15cdff824c"],["static/images/network/VMTrafficShark/traffic_test.png","1798e19828d15c870f1d276cd81005fa"],["static/images/network/VMTrafficShark/vmtrafficshark.png","8215e680c8a3b38b8828cb5673e5e311"],["static/images/network/VMTrafficShark/wifi.png","36109cec7fdb8f4b70eae3dc2dd2f064"],["static/images/network/WebTransport/common_transport_requirements.png","d109983d0d9c0db046ad4e8540736d1a"],["static/images/network/WebTransport/qvis.png","f45dedf1f5d8ea3ab2db8fc67253028d"],["static/images/network/WebTransport/webtransport_client.png","0a419dadecdf339b9258e7e535a9fc4d"],["static/images/network/WebTransport/wq-vvv-01_alpn.png","de6686260dc69f13a982620a9efea860"],["static/images/network/curl/curl-command.png","442b15eaf2987c2b1f29af835d5792c3"],["static/images/network/epoll/Nginx.png","8f67e40a56dbfc3cc56bde911c043514"],["static/images/network/epoll/c10k.jpg","4f9a6125fe71aee973079f944eb37fc4"],["static/images/network/epoll/epoll_API.png","0e02437faa4f13b15fdbc46c5627c21d"],["static/images/network/epoll/io.png","96c1a438bc84baabcddc0e45697e1f67"],["static/images/network/epoll/libevent-benchmark2.jpg","1eab86b7aa51eb976c9f1738cd94e594"],["static/images/network/gRPC/grpc_concept_diagram.png","4cbf0f8158276383fc408fedfb242bce"],["static/images/network/gRPC/grpc_v1.png","e82f3dc48a6cd2829e471e46f180a13e"],["static/images/network/gRPC/grpc_v2.png","4388d3cf40e8eb513277cc58374bbd20"],["static/images/network/performance/geekflare.png","a5933d71bf4a071ff98831b7ab542671"],["static/images/network/performance/google-analytics-ttfb.jpg","a2bb1756bfed1a938bae52f4cbbd29cb"],["static/images/network/performance/google-chrome-devtools-ttfb.jpg","0504b87a384fce6acc84a02d74ae2ce3"],["static/images/network/performance/gtmetrix-waiting.png","b82fa67f90655f8aecaac83dcffb403d"],["static/images/network/performance/keycdn-ttfb-test.jpg","3e1d058acbac0de78da4180c451aa2ae"],["static/images/network/performance/ttfb.png","d0400d1031c0f7c94d7dc53c184c8171"],["static/images/network/performance/wait-time-pingdom.jpg","f6c2beb6f9506fff74223efd9bf8a341"],["static/images/network/performance/waiting-ttfb.jpg","14018e19bc48bc0e866ece9552e9e3e3"],["static/images/network/performance/webpagetest-ttfb.jpg","da7e17a301f5a19c3b3f13b28911c866"],["static/images/operating_systems/kswap_0.png","d4d4da5452218b42c0760fa4514c2424"],["static/images/operating_systems/kswap_1.png","5daa9a251052c32bf2ffdfb730ba2a85"],["static/images/operating_systems/kswap_2.png","84f1c4a1921a05ad901711fd77564963"],["static/images/service_mesh/bookinfo.png","800ba1d1e408e74c8da665a208873f06"],["static/images/service_mesh/circuit_breaking.png","2b15bf02e68f5413b0edfabf5761bec3"],["static/images/service_mesh/configuration.png","88179259c3b77aa2b72a6bf448d6b99c"],["static/images/service_mesh/feature1.png","2bf8a122e57b17af94273bcca46862b9"],["static/images/service_mesh/feature2.png","773f72e42ffc40404c04cecd4d141ff4"],["static/images/service_mesh/gateway.png","facb0e615d159269cf49c3fe1c764420"],["static/images/service_mesh/history.png","8e837ef34a1622ba6a5511cd6d05255d"],["static/images/service_mesh/kiali.png","2012e00882b7245e7dedece4b72c51fd"],["static/images/service_mesh/kiali_funcation.png","24258b6e40251c30fcf801a044bac70d"],["static/images/service_mesh/timeout_retry.png","2cbf242136d4fe1c0bf907060e8b115e"],["static/images/service_mesh/virtualservice.png","ee1d25534eec63484d5fd7a6970efd37"],["static/images/systemd/systemd.png","b8bfdcba19ee3ae6a63c25680f2c9043"],["static/images/systemd/systemd_components2.png","98ddb4023999e074a2e92b01a044f134"],["static/images/tshark/pcap_file_format.png","401e224372f15d1ae3ce50fe557e3039"],["static/images/tshark/tshark_capture.png","e815baa99ddfd0eceb64fc34415fcc67"],["static/images/tshark/tshark_conv.png","7b13a40db44c91033be4af208fbdf40f"],["static/images/tshark/tshark_expert.png","b8a2c75f4caa1e67b76ec131e2b31072"],["static/images/tshark/tshark_o.png","2a824abe5bab11858d5c35346dbe5bbe"],["static/images/tshark/tshark_throughput.png","c462386c90990f8228fe81901823a216"],["static/images/tshark/tshark_z.png","2e9ea2a03695b7f138641cf741aeef33"],["static/images/tshark/wireshark_throughput.png","97c41676877ff24fdc009392c6774d4f"],["static/images/wireshark/init_lua.png","b08470a9f57537486b6112e50b21bd03"],["static/images/wireshark/lua_api_fields.png","33b75cedc301ab91a30354693ad204ef"],["static/images/wireshark/lua_api_pinfo.png","3c5eb533d3063598614b07c6edba14a3"],["static/images/wireshark/lua_api_treeitem.png","4c1c6baf15cf70f8eaee27aae78cd414"],["static/images/wireshark/proto_field.png","46e4f262c49172520891e19d4c16f948"],["static/images/wireshark/proto_field_tcp.png","7884fc6deece800257f77162317d2897"],["static/js/copy.js","3dc9bf0e996951b30e4aadfdfaea9d89"],["static/js/fancybox.js","ff64f9666eec84cfe6b8f391eecdd99f"],["static/js/fireworks.js","ec740072a351996c3cd0d88015bd5e71"],["static/js/head.js","5767a0ef4721d67268a40c2fadc58aba"],["static/js/hexo-theme-melody.js","b345454780458cafb4adea2c495cb978"],["static/js/katex.js","f5a956d2fc63e9f2b6c85599b788e728"],["static/js/scroll.js","dc5fe750f58e40588bf6a24e5f445d1c"],["static/js/search/algolia.js","55ed22510edb986da9302c10c4983fb0"],["static/js/search/local-search.js","4d4eb1ffe1643bfcd1ac05e0870636b4"],["static/js/sidebar.js","eb3d2ce4ba456939d3d064d4c2192e9e"],["static/js/third-party/anime.min.js","d39595bb9a837eeba0420fba4a12c880"],["static/js/third-party/canvas-ribbon.js","71291dda61199bd8ff1907c1726307e7"],["static/js/third-party/jquery.fancybox.min.js","864e44ef1315581d69146044425bdc37"],["static/js/third-party/jquery.min.js","b0269d0296184337181e0c4a0a97f947"],["static/js/third-party/reveal/head.min.js","952ff827b5935a64f3747272174e7a9b"],["static/js/third-party/velocity.min.js","4bb4fe82ae81f0b9aff980b261e19e08"],["static/js/third-party/velocity.ui.min.js","f534fe65720e91dcd25be5cc0005ce25"],["static/js/transition.js","4b3a4d9eb258df67fc80755f2ec56443"],["static/js/utils.js","8b77d23cb8cc3df4fd737af80274a8e6"],["tags/Certificate/index.html","375d77a083208eda084977ea6ac28548"],["tags/Go/index.html","29a8f8e6fdb8a4a65847477228521626"],["tags/QUIC/index.html","f7ab34d5f8d343d688e66f1420a60c30"],["tags/TCP协议/index.html","a41e8f76b05da6bf4534480f6cb1e05a"],["tags/design-pattern/index.html","9d5f21d9ae07c2536d418c392bdcc3b5"],["tags/devops/index.html","401e03b31c96257b54fc94572c37a390"],["tags/docker/index.html","d55d986ed02192345b98a65470c39688"],["tags/epoll/index.html","086854f51bedf9c50c411e256d2ec205"],["tags/etcd/index.html","df50cda43634a3389ea881db23f25aa3"],["tags/git/index.html","a9ef6977f70aa48869126ead0b078ee8"],["tags/golang/index.html","1e7a568944e4033cae9086ab2e0dcd92"],["tags/grpc/index.html","05cc887d7b0a12328bea6e07d6d05a78"],["tags/index.html","c3bbc011f490f2d946577498e5ae574d"],["tags/k8s/index.html","54f97ecf8ae81b3650d5839af1bef4eb"],["tags/network/index.html","d9250a22851ff10bb5295c77ad53dbe7"],["tags/nginx/index.html","d423646ee1a9321f6b2e9b69951c085f"],["tags/ops/index.html","1a8c53df3851371098253df2b35062bf"],["tags/socket编程/index.html","0fd40e4cb80898e6e080f73698236626"],["tags/tls/index.html","4e640ffe0d4fb9c29b228efd280028c7"],["tags/wireshark/index.html","9486ed66c1485ab768953402a4b7d21c"],["tags/协程/index.html","6bf25e35771cccb47eae64758b9da258"],["tags/点播/index.html","e6948c6c39309a25d17c8f5cc8f86a84"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







