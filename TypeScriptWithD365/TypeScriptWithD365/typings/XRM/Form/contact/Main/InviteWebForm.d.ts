/// <reference path="../../../xrm.d.ts" />
/// <reference path="../../../_internal/EntityEnum/contact.d.ts" />
declare namespace Form.contact.Main {
  namespace InviteWebForm {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute;
      get(name: "statecode"): Xrm.OptionSetAttribute<contact_statecode>;
      get(name: string): Xrm.EmptyAttribute;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "firstname"): Xrm.StringControl;
      get(name: "lastname"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl;
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
  interface InviteWebForm extends Xrm.PageBase<InviteWebForm.Attributes,InviteWebForm.Tabs,InviteWebForm.Controls> {
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<contact_statecode>;
    getAttribute(attributeName: string): Xrm.EmptyAttribute;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<contact_statecode>;
    getControl(controlName: string): Xrm.EmptyControl;
  }
}
