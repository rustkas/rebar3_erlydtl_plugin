searchNodes=[{"doc":"The rebar_erlydtl_compiler module is a plugin for rebar that compiles ErlyDTL templates. By default, it compiles all priv/templates/*.dtl to ebin/*_dtl.beam . Configuration options should be placed in rebar.config under erlydtl_opts . It can be a list of name-value tuples or a list of lists of name-value tuples if you have multiple template directories that need to have different settings (see example below). Available options include: doc_root : where to find templates to compile priv/templates by default out_dir : where to put compiled template beam files ebin by default source_ext : the file extension the template sources have .dtl by default module_ext : characters to append to the template's module name _dtl by default recursive : boolean that determines if doc_root (s) need to be scanned recursively for matching template file names (default: true ). For example, if you had: / t_src / base . html foo . html And you wanted them compiled to: / priv / base . beam foo . beam You would add to your rebar.config: { erlydtl_opts , [ { doc_root , &quot;t_src&quot; } , { out_dir , &quot;priv&quot; } , { source_ext , &quot;.html&quot; } , { module_ext , &quot;&quot; } ] } . The default settings are the equivalent of: { erlydtl_opts , [ { doc_root , &quot;priv/templates&quot; } , { out_dir , &quot;ebin&quot; } , { source_ext , &quot;.dtl&quot; } , { module_ext , &quot;_dtl&quot; } ] } . The following example will compile the following templates: src/*.dtl files into ebin/*_dtl.beam and priv/templates/*.html into ebin/*.beam . Note that any tuple option (such as out_dir ) in the outer list is added to each inner list: { erlydtl_opts , [ { out_dir , &quot;ebin&quot; } , { recursive , false } , [ { doc_root , &quot;src&quot; } , { module_ext , &quot;_dtl&quot; } ] , [ { doc_root , &quot;priv/templates&quot; } , { module_ext , &quot;&quot; } , { source_ext , &quot;.html&quot; } ] ] } .","ref":"rebar3_erlydtl_plugin.html","title":"rebar3_erlydtl_plugin","type":"module"},{"doc":"","ref":"rebar3_erlydtl_plugin.html#do/1","title":"rebar3_erlydtl_plugin.do/1","type":"function"},{"doc":"","ref":"rebar3_erlydtl_plugin.html#format_error/1","title":"rebar3_erlydtl_plugin.format_error/1","type":"function"},{"doc":"","ref":"rebar3_erlydtl_plugin.html#init/1","title":"rebar3_erlydtl_plugin.init/1","type":"function"},{"doc":"Copyright (c) 2015, Tristan Sloughter &lt;t@crashfast.com&gt;. All rights reserved. Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. * The names of its contributors may not be used to endorse or promote products derived from this software without specific prior written permission. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS &quot;AS IS&quot; AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.","ref":"license.html","title":"License","type":"extras"},{"doc":"A rebar plugin","ref":"readme.html","title":"Overview","type":"extras"},{"doc":"$ rebar3 compile","ref":"readme.html#build","title":"Overview - Build","type":"extras"},{"doc":"Add the plugin to your rebar config: { plugins , [ { rebar3_erlydtl_plugin , &quot;.*&quot; , { git , &quot;https://github.com/tsloughter/rebar3_erlydtl_plugin.git&quot; , { branch , &quot;master&quot; } } } ] } . Then just call your plugin directly in an existing application: $ rebar3 erlydtl compile === &gt; Fetching rebar3_erlydtl_plugin === &gt; Compiling rebar3_erlydtl_plugin To have it invoked automatically when running rebar3 compile add it as a provider_hooks : { provider_hooks , [ { pre , [ { compile , { erlydtl , compile } } ] } ] } .","ref":"readme.html#use","title":"Overview - Use","type":"extras"},{"doc":"ExDoc $ rebar3 ex_doc -- output edoc","ref":"readme.html#documentation-generation","title":"Overview - Documentation generation","type":"extras"}]