/// <reference path="../../../xrm.d.ts" />
/// <reference path="../../../_internal/EntityEnum/contact.d.ts" />
declare namespace Form.contact.Main {
  namespace ProfileWebFormJapanese {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "yomilastname"): Xrm.Attribute<string>;
      get(name: "yomifirstname"): Xrm.Attribute<string>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "adx_organizationname"): Xrm.Attribute<string>;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "nickname"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: "adx_publicprofilecopy"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute;
      get(name: "adx_preferredlanguageid"): Xrm.LookupAttribute;
      get(name: "statecode"): Xrm.OptionSetAttribute<contact_statecode>;
      get(name: string): Xrm.EmptyAttribute;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "lastname"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
      get(name: "yomilastname"): Xrm.StringControl;
      get(name: "yomifirstname"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "adx_organizationname"): Xrm.StringControl;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "nickname"): Xrm.StringControl;
      get(name: "websiteurl"): Xrm.StringControl;
      get(name: "adx_publicprofilecopy"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl;
      get(name: "adx_preferredlanguageid"): Xrm.LookupControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<contact_statecode>;
      get(name: string): Xrm.EmptyControl;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): Xrm.EmptyPageTab;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ProfileWebFormJapanese extends Xrm.PageBase<ProfileWebFormJapanese.Attributes,ProfileWebFormJapanese.Tabs,ProfileWebFormJapanese.Controls> {
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "yomilastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "yomifirstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "adx_organizationname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "nickname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "adx_publicprofilecopy"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "adx_preferredlanguageid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<contact_statecode>;
    getAttribute(attributeName: string): Xrm.EmptyAttribute;
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "yomilastname"): Xrm.StringControl;
    getControl(controlName: "yomifirstname"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "adx_organizationname"): Xrm.StringControl;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "nickname"): Xrm.StringControl;
    getControl(controlName: "websiteurl"): Xrm.StringControl;
    getControl(controlName: "adx_publicprofilecopy"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl;
    getControl(controlName: "adx_preferredlanguageid"): Xrm.LookupControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<contact_statecode>;
    getControl(controlName: string): Xrm.EmptyControl;
  }
}
