
import React from 'react';
import { ToolEntry } from './types';

export const LOGO_URL = "https://walabox-assets.oss-cn-beijing.aliyuncs.com/unnamed.jpg";

export const TOOLS: ToolEntry[] = [
  {
    id: 'x-ray-mirror',
    title: 'X-ray Mirror',
    description: '用摄像头追踪面部和手势，透视颅骨、大脑、眼球和手骨，移动指尖控制透视范围。',
    icon: '💀',
    url: 'https://walabox-xray.vercel.app/',
    color: 'from-cyan-400 to-blue-600',
    tag: '手势控制',
    image: new URL('./assets/x-ray-mirror.webp', import.meta.url).href
  },
  {
    id: 'cyber-christmas-tree',
    title: '赛博圣诞树',
    description: '手势控制圣诞树。上传你的照片并将其融入圣诞树中，打造个性化、温暖的节日装饰。',
    icon: '🎄',
    url: 'https://tree.walabox.cn',
    color: 'from-green-400 to-cyan-500',
    tag: '节日限定',
    image: 'https://walabox-assets.oss-cn-beijing.aliyuncs.com/unnamed%20%2810%29.jpg'
  },
  {
    id: 'perler-bead-generator',
    title: '拼豆图纸生成',
    description: '将你的创意瞬间像素化。只需上传图片，即可生成专业的拼豆对比图纸与配色方案，并且提供在线着色编辑的功能。',
    icon: '🎨',
    url: 'https://bean.walabox.cn',
    color: 'from-purple-400 to-pink-500',
    tag: '创意手工',
    image: 'https://walabox-assets.oss-cn-beijing.aliyuncs.com/%E6%8D%95%E6%98%AF%E8%8E%B7.JPG'
  }
];
