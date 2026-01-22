
import React from 'react';
import { ToolEntry } from './types';

export const LOGO_URL = "https://walabox-assets.oss-cn-beijing.aliyuncs.com/unnamed.jpg";

export const TOOLS: ToolEntry[] = [
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
    url: 'https://walabean-v2-1-150067904792.us-west1.run.app',
    color: 'from-purple-400 to-pink-500',
    tag: '创意手工',
    image: 'https://walabox-assets.oss-cn-beijing.aliyuncs.com/%E6%8D%95%E6%98%AF%E8%8E%B7.JPG'
  },
  {
    id: 'new-year-fireworks',
    title: '新年烟花',
    description: '即刻绽放属于你的数字烟火。支持手势控制，让绚烂的烟花在指尖绽放，还可上传照片制作年度回忆录。',
    icon: '🎆',
    url: '#',
    color: 'from-orange-400 to-red-600',
    tag: '节日预告',
    image: 'https://walabox-assets.oss-cn-beijing.aliyuncs.com/unnamed%20%2811%29.jpg',
    isComingSoon: true
  }
];
