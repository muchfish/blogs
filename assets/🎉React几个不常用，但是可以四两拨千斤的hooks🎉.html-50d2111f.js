const t=JSON.parse(`{"key":"v-76e3d114","path":"/react/%F0%9F%8E%89React%E5%87%A0%E4%B8%AA%E4%B8%8D%E5%B8%B8%E7%94%A8%EF%BC%8C%E4%BD%86%E6%98%AF%E5%8F%AF%E4%BB%A5%E5%9B%9B%E4%B8%A4%E6%8B%A8%E5%8D%83%E6%96%A4%E7%9A%84hooks%F0%9F%8E%89.html","title":"🎉React几个不常用，但是可以四两拨千斤的hooks🎉","lang":"zh-CN","frontmatter":{"title":"🎉React几个不常用，但是可以四两拨千斤的hooks🎉","isTimeLine":true,"date":"2023-05-09T00:00:00.000Z","category":["前端"],"tag":["JavaScript","React"],"description":"大家好，我是「萌萌哒草头将军」，也可以关注我的公众号「萌萌哒草头将军」 今天介绍几个React几个不常用，但是可以四两拨千斤的hooks useSyncExternalStore 监听外部数据变化 外部数据源需要提供订阅函数，并且这个函数需要返回取消订阅的方法 import React from 'react'; import { store } from './store.js' export const App () { const data = useSyncExternalStore(store.subscribe, store.getData) return &lt;&gt; &lt;button onClick={store.add}&gt;add+&lt;/button&gt; {data} &lt;/&gt; }","head":[["meta",{"property":"og:url","content":"https://muchfish.github.io/blogs/react/%F0%9F%8E%89React%E5%87%A0%E4%B8%AA%E4%B8%8D%E5%B8%B8%E7%94%A8%EF%BC%8C%E4%BD%86%E6%98%AF%E5%8F%AF%E4%BB%A5%E5%9B%9B%E4%B8%A4%E6%8B%A8%E5%8D%83%E6%96%A4%E7%9A%84hooks%F0%9F%8E%89.html"}],["meta",{"property":"og:site_name","content":"摸鱼散人"}],["meta",{"property":"og:title","content":"🎉React几个不常用，但是可以四两拨千斤的hooks🎉"}],["meta",{"property":"og:description","content":"大家好，我是「萌萌哒草头将军」，也可以关注我的公众号「萌萌哒草头将军」 今天介绍几个React几个不常用，但是可以四两拨千斤的hooks useSyncExternalStore 监听外部数据变化 外部数据源需要提供订阅函数，并且这个函数需要返回取消订阅的方法 import React from 'react'; import { store } from './store.js' export const App () { const data = useSyncExternalStore(store.subscribe, store.getData) return &lt;&gt; &lt;button onClick={store.add}&gt;add+&lt;/button&gt; {data} &lt;/&gt; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-05T07:35:09.000Z"}],["meta",{"property":"article:author","content":"摸鱼散人"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:published_time","content":"2023-05-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-05T07:35:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"🎉React几个不常用，但是可以四两拨千斤的hooks🎉\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-09T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-05T07:35:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"摸鱼散人\\",\\"url\\":\\"https://gitee.com/daiwencheng\\"}]}"]]},"headers":[{"level":3,"title":"useSyncExternalStore","slug":"usesyncexternalstore","link":"#usesyncexternalstore","children":[]},{"level":3,"title":"useId","slug":"useid","link":"#useid","children":[]},{"level":3,"title":"useLayoutEffect","slug":"uselayouteffect","link":"#uselayouteffect","children":[]},{"level":3,"title":"useDeferredValue","slug":"usedeferredvalue","link":"#usedeferredvalue","children":[]},{"level":3,"title":"useReducer","slug":"usereducer","link":"#usereducer","children":[]},{"level":3,"title":"useRef","slug":"useref","link":"#useref","children":[]},{"level":3,"title":"useImperativeHandle","slug":"useimperativehandle","link":"#useimperativehandle","children":[]}],"git":{"createdTime":1701761709000,"updatedTime":1701761709000,"contributors":[{"name":"daiwencheng","email":"daiwencheng@shengqugames.com","commits":1}]},"readingTime":{"minutes":1.39,"words":416},"filePathRelative":"react/🎉React几个不常用，但是可以四两拨千斤的hooks🎉.md","localizedDate":"2023年5月9日","excerpt":"<p>大家好，我是「萌萌哒草头将军」，也可以关注我的公众号「萌萌哒草头将军」</p>\\n<p>今天介绍几个<code>React</code>几个不常用，但是可以四两拨千斤的<code>hooks</code></p>\\n<h3> <code>useSyncExternalStore</code></h3>\\n<p>监听外部数据变化</p>\\n<blockquote>\\n<p>外部数据源需要提供订阅函数，并且这个函数需要返回取消订阅的方法</p>\\n</blockquote>\\n<div class=\\"language-jsx line-numbers-mode\\" data-ext=\\"jsx\\"><pre class=\\"language-jsx\\"><code><span class=\\"token keyword\\">import</span> React <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'react'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> store <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span>  <span class=\\"token string\\">'./store.js'</span>\\n\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">const</span> <span class=\\"token function\\">App</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> data <span class=\\"token operator\\">=</span> <span class=\\"token function\\">useSyncExternalStore</span><span class=\\"token punctuation\\">(</span>store<span class=\\"token punctuation\\">.</span>subscribe<span class=\\"token punctuation\\">,</span> store<span class=\\"token punctuation\\">.</span>getData<span class=\\"token punctuation\\">)</span>\\n  \\n  <span class=\\"token keyword\\">return</span> <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n    </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>button</span> <span class=\\"token attr-name\\">onClick</span><span class=\\"token script language-javascript\\"><span class=\\"token script-punctuation punctuation\\">=</span><span class=\\"token punctuation\\">{</span>store<span class=\\"token punctuation\\">.</span>add<span class=\\"token punctuation\\">}</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">add+</span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>button</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n    </span><span class=\\"token punctuation\\">{</span>data<span class=\\"token punctuation\\">}</span><span class=\\"token plain-text\\">\\n  </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
