<template>
   <div class="PageContent">
        <main class="PageMain">
            <div class="ContentHeader">
                <h2 class="ContentHeader_Title">Group List</h2>
                <div class="ContentHeader_Buttons">
                    <button class="btn btn-success btn-sm text-uppercase">
                        <i class="fa fa-plus"></i> Create
                    </button>
                </div>
                <div class="ContentHeader_SearchField">
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">
                                <i class="fa fa-search"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control" placeholder="FILTER" aria-label="Filter" aria-describedby="basic-addon1">
                    </div>
                </div>
            </div>
            <table class="ModelList">
                <thead>
                    <tr>
                        <th class="ModelList_Select"><i class="fa fa-folder-o"></i></th>
                        <th>Name</th>
                        <th>Project</th>
                        <th>Tags</th>
                        <th>Custom Fields</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="ModelList_Select"><i class="fa fa-folder-o"></i></td>
                        <td><a href="#">corba_export</a></td>
                        <td>corba</td>
                        <td>&nbsp;</td>
                        <td>
                            <span class="CF">
                                <span class="CF_Key">eine_os</span>
                                <span class="CF_Value">ubuntu</span>
                            </span>
                            <span class="CF">
                                <span class="CF_Key">eine_net</span>
                                <span class="CF_Value">dhcp</span>
                            </span>
                        </td>
                        <td>CORBA frontends</td>
                    </tr>
                    <tr>
                        <td class="ModelList_Select"><i class="fa fa-folder-o"></i></td>
                        <td><a href="#">corba_back</a></td>
                        <td>corba</td>
                        <td>
                            <span class="Tag">
                                corba
                            </span>                              
                        </td>
                        <td>
                            <span class="CF">
                                <span class="CF_Key">eine_os</span>
                                <span class="CF_Value">ubuntu</span>
                            </span>
                            <span class="CF">
                                <span class="CF_Key">eine_net</span>
                                <span class="CF_Value">dhcp</span>
                            </span>
                        </td>
                        <td>CORBA backends</td>
                    </tr>
                    <tr>
                        <td class="ModelList_Select"><i class="fa fa-folder-o"></i></td>
                        <td><a href="#">corba_db</a></td>
                        <td>corba</td>
                        <td>
                            <span class="Tag">corba</span>                              
                            <span class="Tag">database</span>           
                            <span class="Tag">database-master</span>           
                        </td>
                        <td>
                            <span class="CF">
                                <span class="CF_Key">eine_os</span>
                                <span class="CF_Value">ubuntu</span>
                            </span>
                            <span class="CF">
                                <span class="CF_Key">eine_net</span>
                                <span class="CF_Value">dhcp</span>
                            </span>
                            <span class="CF">
                                <span class="CF_Key">eine_disk</span>
                                <span class="CF_Value">auto</span>
                            </span>
                        </td>
                        <td>CORBA databases</td>
                    </tr>
                    <tr>
                        <td class="ModelList_Select"><i class="fa fa-folder-o"></i></td>
                        <td><a href="#">corba_export</a></td>
                        <td>corba</td>
                        <td>&nbsp;</td>
                        <td>
                            <span class="CF">
                                <span class="CF_Key">eine_os</span>
                                <span class="CF_Value">ubuntu</span>
                            </span>
                            <span class="CF">
                                <span class="CF_Key">eine_net</span>
                                <span class="CF_Value">dhcp</span>
                            </span>
                        </td>
                        <td>CORBA frontends</td>
                    </tr>
                    <tr>
                        <td class="ModelList_Select"><i class="fa fa-folder-o"></i></td>
                        <td><a href="#">corba_back</a></td>
                        <td>corba</td>
                        <td>
                            <span class="Tag">
                                corba
                            </span>                              
                        </td>
                        <td>
                            <span class="CF">
                                <span class="CF_Key">eine_os</span>
                                <span class="CF_Value">ubuntu</span>
                            </span>
                            <span class="CF">
                                <span class="CF_Key">eine_net</span>
                                <span class="CF_Value">dhcp</span>
                            </span>
                        </td>
                        <td>CORBA backends</td>
                    </tr>
                    <tr>
                        <td class="ModelList_Select"><i class="fa fa-folder-o"></i></td>
                        <td><a href="#">corba_db</a></td>
                        <td>corba</td>
                        <td>
                            <span class="Tag">
                                corba
                            </span>                              
                        </td>
                        <td>
                            <span class="CF">
                                <span class="CF_Key">eine_os</span>
                                <span class="CF_Value">ubuntu</span>
                            </span>
                            <span class="CF">
                                <span class="CF_Key">eine_net</span>
                                <span class="CF_Value">dhcp</span>
                            </span>
                        </td>
                        <td>CORBA databases</td>
                    </tr>
                    <tr>
                        <td class="ModelList_Select"><i class="fa fa-folder-o"></i></td>
                        <td><a href="#">corba_export</a></td>
                        <td>corba</td>
                        <td>&nbsp;</td>
                        <td>
                            <span class="CF">
                                <span class="CF_Key">eine_os</span>
                                <span class="CF_Value">ubuntu</span>
                            </span>
                            <span class="CF">
                                <span class="CF_Key">eine_net</span>
                                <span class="CF_Value">dhcp</span>
                            </span>
                        </td>
                        <td>CORBA frontends</td>
                    </tr>
                    <tr>
                        <td class="ModelList_Select"><i class="fa fa-folder-o"></i></td>
                        <td><a href="#">corba_back</a></td>
                        <td>corba</td>
                        <td>
                            <span class="Tag">
                                corba
                            </span>                              
                        </td>
                        <td>
                            <span class="CF">
                                <span class="CF_Key">eine_os</span>
                                <span class="CF_Value">ubuntu</span>
                            </span>
                            <span class="CF">
                                <span class="CF_Key">eine_net</span>
                                <span class="CF_Value">dhcp</span>
                            </span>
                        </td>
                        <td>CORBA backends</td>
                    </tr>
                    <tr>
                        <td class="ModelList_Select"><i class="fa fa-folder-o"></i></td>
                        <td><a href="#">corba_db</a></td>
                        <td>corba</td>
                        <td>
                            <span class="Tag">
                                corba
                            </span>                              
                        </td>
                        <td>
                            <span class="CF">
                                <span class="CF_Key">eine_os</span>
                                <span class="CF_Value">ubuntu</span>
                            </span>
                            <span class="CF">
                                <span class="CF_Key">eine_net</span>
                                <span class="CF_Value">dhcp</span>
                            </span>
                        </td>
                        <td>CORBA databases</td>
                    </tr>
                    <tr>
                        <td class="ModelList_Select"><i class="fa fa-folder-o"></i></td>
                        <td><a href="#">corba_export</a></td>
                        <td>corba</td>
                        <td>&nbsp;</td>
                        <td>
                            <span class="CF">
                                <span class="CF_Key">eine_os</span>
                                <span class="CF_Value">ubuntu</span>
                            </span>
                            <span class="CF">
                                <span class="CF_Key">eine_net</span>
                                <span class="CF_Value">dhcp</span>
                            </span>
                        </td>
                        <td>CORBA frontends</td>
                    </tr>
                    <tr>
                        <td class="ModelList_Select"><i class="fa fa-folder-o"></i></td>
                        <td><a href="#">corba_back</a></td>
                        <td>corba</td>
                        <td>
                            <span class="Tag">
                                corba
                            </span>                              
                        </td>
                        <td>
                            <span class="CF">
                                <span class="CF_Key">eine_os</span>
                                <span class="CF_Value">ubuntu</span>
                            </span>
                            <span class="CF">
                                <span class="CF_Key">eine_net</span>
                                <span class="CF_Value">dhcp</span>
                            </span>
                        </td>
                        <td>CORBA backends</td>
                    </tr>
                    <tr>
                        <td class="ModelList_Select"><i class="fa fa-folder-o"></i></td>
                        <td><a href="#">corba_db</a></td>
                        <td>corba</td>
                        <td>
                            <span class="Tag">
                                corba
                            </span>                              
                        </td>
                        <td>
                            <span class="CF">
                                <span class="CF_Key">eine_os</span>
                                <span class="CF_Value">ubuntu</span>
                            </span>
                            <span class="CF">
                                <span class="CF_Key">eine_net</span>
                                <span class="CF_Value">dhcp</span>
                            </span>
                        </td>
                        <td>CORBA databases</td>
                    </tr>
                    <tr>
                        <td class="ModelList_Select"><i class="fa fa-folder-o"></i></td>
                        <td><a href="#">corba_export</a></td>
                        <td>corba</td>
                        <td>&nbsp;</td>
                        <td>
                            <span class="CF">
                                <span class="CF_Key">eine_os</span>
                                <span class="CF_Value">ubuntu</span>
                            </span>
                            <span class="CF">
                                <span class="CF_Key">eine_net</span>
                                <span class="CF_Value">dhcp</span>
                            </span>
                        </td>
                        <td>CORBA frontends</td>
                    </tr>
                    <tr>
                        <td class="ModelList_Select"><i class="fa fa-folder-o"></i></td>
                        <td><a href="#">corba_back</a></td>
                        <td>corba</td>
                        <td>
                            <span class="Tag">
                                corba
                            </span>                              
                        </td>
                        <td>
                            <span class="CF">
                                <span class="CF_Key">eine_os</span>
                                <span class="CF_Value">ubuntu</span>
                            </span>
                            <span class="CF">
                                <span class="CF_Key">eine_net</span>
                                <span class="CF_Value">dhcp</span>
                            </span>
                        </td>
                        <td>CORBA backends</td>
                    </tr>
                    <tr>
                        <td class="ModelList_Select"><i class="fa fa-folder-o"></i></td>
                        <td><a href="#">corba_db</a></td>
                        <td>corba</td>
                        <td>
                            <span class="Tag">
                                corba
                            </span>                              
                        </td>
                        <td>
                            <span class="CF">
                                <span class="CF_Key">eine_os</span>
                                <span class="CF_Value">ubuntu</span>
                            </span>
                            <span class="CF">
                                <span class="CF_Key">eine_net</span>
                                <span class="CF_Value">dhcp</span>
                            </span>
                        </td>
                        <td>CORBA databases</td>
                    </tr>
                </tbody>
            </table>
            <pagination/>
        </main> 
    </div>
</template>

<script>
import Pagination from '@/components/Common/Pagination'
export default {
  components: {
      Pagination
  }
}
</script>

<style>

</style>
