import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as e}from"./app-43ebed80.js";const t={},p=e(`<h2 id="讲讲hashset的底层实现" tabindex="-1"><a class="header-anchor" href="#讲讲hashset的底层实现" aria-hidden="true">#</a> 讲讲HashSet的底层实现？</h2><ul><li><p>HashSet 底层就是基于 HashMap 实现的</p><ul><li>HashSet 的源码⾮常⾮常少，因为除了clone() 、 writeObject() 、 readObject() 是 HashSet⾃⼰不得不实现之外，其他⽅法都是直接调⽤ HashMap 中的⽅法。</li></ul></li><li><p>HashSet的add方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token constant">PRESENT</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>直接调用HashMap的put方法，将添加的元素作为key，new一个Object作为value</p></li><li><p>会根据返回值是否为空来判断是否插入元素成功</p><ul><li><p>HashMap的putVal</p><ul><li><p>进行了一系列判断，最后的结果是，只有在key在table数组中不存在的时候，才会返回插入的值</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// existing mapping for key</span>
    <span class="token class-name">V</span> oldValue <span class="token operator">=</span> e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>onlyIfAbsent <span class="token operator">||</span> oldValue <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    	e<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token function">afterNodeAccess</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li></ul></li></ul>`,2),l=[p];function o(c,i){return n(),s("div",null,l)}const d=a(t,[["render",o],["__file","Set.html.vue"]]);export{d as default};