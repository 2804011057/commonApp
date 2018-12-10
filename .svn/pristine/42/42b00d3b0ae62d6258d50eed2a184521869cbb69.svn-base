		
		/**
		 * JSON�����۵��˵�
		 * @constructor {AccordionMenu}
		 * @param {options} ����
		 * @date 2013-12-13
		 * @author tugenhua
		 * @email 879083421@qq.com
		 */
		
		 function AccordionMenu(options) {
			this.config = {
				containerCls        : '.wrap-menu',                // �������
				menuArrs            :  '',                         //  JSON������������
				type                :  'click',                    // Ĭ��Ϊclick Ҳ����mouseover
				renderCallBack      :  null,                       // ��Ⱦhtml�ṹ��ص�
				clickItemCallBack   : null                         // ÿ���ĳһ��ʱ��ص�
			};
			this.cache = {
				
			};
			this.init(options);
		 }
		
		 
		 AccordionMenu.prototype = {
		
			constructor: AccordionMenu,
		
			init: function(options){
				this.config = $.extend(this.config,options || {});
				var self = this,
					_config = self.config,
					_cache = self.cache;
				
				// ��Ⱦhtml�ṹ
				$(_config.containerCls).each(function(index,item){
					
					self._renderHTML(item);
		
					// �������¼�
					self._bindEnv(item);
				});
			},
			_renderHTML: function(container){
				var self = this,
					_config = self.config,
					_cache = self.cache;
				var ulhtml = $('<ul></ul>');
				$(_config.menuArrs).each(function(index,item){
					var lihtml = $('<li><h2>'+item.Name+'<span class="hidden">'+item.FullName+'</span></h2><span class="hidden">'+item.DeptId+'</span></li>');	
					if(item.Children && item.Children.length > 0) {
						self._createChildren(item.Children,lihtml);
					}
					$(ulhtml).append(lihtml);
				});
				$(container).append(ulhtml);
				
				_config.renderCallBack && $.isFunction(_config.renderCallBack) && _config.renderCallBack();
				
				// ����㼶����
				self._levelIndent(ulhtml);
			},
			/**
			 * �����Ӳ˵�
			 * @param {array} �Ӳ˵�
			 * @param {lihtml} li��
			 */
			_createChildren: function(Children,lihtml){
				var self = this,
					_config = self.config,
					_cache = self.cache;
				var subUl = $('<ul></ul>'),
					callee = arguments.callee,
					subLi;
				
				$(Children).each(function(index,item){
					var url = item.url || 'javascript:void(0)';
		
					subLi = $('<li><a href="'+url+'">'+item.Name+'<span class="hidden">'+item.FullName+'</span></a>'+'<span class="hidden">'+item.DeptId+'</span>'+'</li>');
					if(item.Children && item.Children.length > 0) {
		
						$(subLi).children('a').prepend('<img src="../../images/blank.gif" alt=""/>');
		                callee(item.Children, subLi);
					}
					$(subUl).append(subLi);
				});
				$(lihtml).append(subUl);
			},
			/**
			 * ����㼶����
			 */
			_levelIndent: function(ulList){
				var self = this,
					_config = self.config,
					_cache = self.cache,
					callee = arguments.callee;
			   
				var initTextIndent = 2,
					lev = 1,
					$oUl = $(ulList);
				
				while($oUl.find('ul').length > 0){
					initTextIndent = parseInt(initTextIndent,10) + 2 + 'em'; 
					$oUl.children().children('ul').addClass('lev-' + lev)
								.children('li').addClass('childen').css('text-indent', initTextIndent);
					$oUl = $oUl.children().children('ul');
					lev++;
				}
				$(ulList).find('ul').hide();
				$(ulList).find('ul:first').show();	
			},
			/**
			 * ���¼�
			 */
			_bindEnv: function(container) {
				var self = this,
					_config = self.config;
		
				$('h2,a',container).unbind(_config.type);
				$('h2,a',container).bind(_config.type,function(e){
					if($(this).siblings('ul').length > 0) {
						$(this).siblings('ul').slideToggle('slow').end().children('img').toggleClass('unfold');
					}
		
					$(this).parent('li').siblings().find('ul').hide()
						   .end().find('img.unfold').removeClass('unfold');
					_config.clickItemCallBack && $.isFunction(_config.clickItemCallBack) && _config.clickItemCallBack($(this));
		
				});
			}
		 };